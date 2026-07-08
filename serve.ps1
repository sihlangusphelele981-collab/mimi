$root = 'C:\Users\user\OneDrive\Documentos'
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:8000/')
$listener.Start()
Write-Output "Serving $root at http://localhost:8000/ (press Ctrl+C to stop)"
while ($listener.IsListening) {
    $context = $listener.GetContext()
    $req = $context.Request
    $resp = $context.Response
    $localPath = $req.Url.LocalPath.TrimStart('/')
    if ($localPath -eq '') { $localPath = 'index.html' }
    $file = Join-Path $root $localPath
    if (Test-Path $file) {
        $bytes = [System.IO.File]::ReadAllBytes($file)
        $resp.ContentLength64 = $bytes.Length
        $ext = [System.IO.Path]::GetExtension($file).ToLower()
        switch ($ext) {
            '.html' { $mime='text/html' }
            '.htm'  { $mime='text/html' }
            '.css'  { $mime='text/css' }
            '.js'   { $mime='application/javascript' }
            '.png'  { $mime='image/png' }
            '.jpg'  { $mime='image/jpeg' }
            '.jpeg' { $mime='image/jpeg' }
            '.gif'  { $mime='image/gif' }
            '.mp3'  { $mime='audio/mpeg' }
            '.ogg'  { $mime='audio/ogg' }
            default { $mime='application/octet-stream' }
        }
        $resp.ContentType = $mime
        $resp.OutputStream.Write($bytes,0,$bytes.Length)
    } else {
        $resp.StatusCode = 404
        $msg = 'Not Found'
        $b = [System.Text.Encoding]::UTF8.GetBytes($msg)
        $resp.ContentType = 'text/plain'
        $resp.ContentLength64 = $b.Length
        $resp.OutputStream.Write($b,0,$b.Length)
    }
    $resp.OutputStream.Close()
}
