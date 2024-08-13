var ALLOW = "DIRECT";
var BLOCK = "HTTPS localhost:8443";


function FindProxyForURL(url, host) {
  return BLOCK;
}
