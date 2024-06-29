# DNS QuickCheck
A Chrome browser extension that fetches DNS settings for the current tab's site. It also allows for querying other domains directly from the extension window.

# Add to Chrome
https://chromewebstore.google.com/detail/dns-quickcheck/hpbgbfnilhpfclflghnncejjoibmmijc

## QuickCheck
The extension defaults to displaying A, NS, and CNAME records (where available) for the (sub)domain.

## Record types
Choose from the following individual record types to query:
- A
- NS
- CNAME
- SOA
- MX
- TXT
- AAAA
- SRV

## License
This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. To view a copy of this license, visit [http://creativecommons.org/licenses/by-nc-sa/4.0/](http://creativecommons.org/licenses/by-nc-sa/4.0/).


## Version History
### V1.1.1
- Prevents displaying duplicate results in QuickCheck.
- Use the root domain for nameserver queries. Handles registrars that don't return an NS record when using a subdomain.