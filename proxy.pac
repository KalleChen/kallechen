var ALLOW = "DIRECT";
var BLOCK = "HTTPS localhost:8443";

function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.example.org") || dnsDomainIs(host, "example.org")) {
        return BLOCK;
    }
    return ALLOW;
}
