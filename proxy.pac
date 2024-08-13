var ALLOW = "DIRECT";
var BLOCK = "PROXY 127.0.0.1:8443";

function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.example.org") || dnsDomainIs(host, "example.org")) {
        return BLOCK;
    }
    return ALLOW;
}
