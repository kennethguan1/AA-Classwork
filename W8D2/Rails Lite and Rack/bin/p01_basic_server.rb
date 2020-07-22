require 'rack'

app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  res['Content-Type'] = 'text/html'
  if req.path == "/"
    res.write("Hello World")
  else
    res.write("#{req.path}")
  end
  res.finish
end

Rack::Server.start(
  app: app,
  Port: 3001
)