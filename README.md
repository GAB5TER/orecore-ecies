# ECIES for Orecore

A module for [core][orecore] that implements the [Elliptic Curve Integrated Encryption Scheme (ECIES)][ECIES]. Uses ECIES symmetric key negotiation from public keys to encrypt arbitrarily long data streams.

See [the main orecore repo](https://github.com/GAB5TER/orecore) or the [orecore guide on ECIES](http://bitcore.io/guide/module/ecies/index.html) for more information.

Credit to [@ryanxcharles][ryan] for the original implementation.

## Getting started

ECIES will allow to securely encrypt and decrypt messages using ECDSA key pairs (galactrum cryptography).

```javascript
var alice = ECIES()
  .privateKey(aliceKey)
  .publicKey(bobKey.publicKey);

var message = 'some secret message';
var encrypted = alice.encrypt(message);

// encrypted will contain an encrypted buffer only Bob can decrypt

var bob = ECIES()
  .privateKey(bobKey)
  .publicKey(aliceKey.publicKey);
var decrypted = bob
  .decrypt(encrypted)
  .toString();
// decrypted will be 'some secret message'
```

## Contributing

See [CONTRIBUTING.md](https://github.com/GAB5TER/orecore/blob/master/CONTRIBUTING.md) on the main orecore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/GAB5TER/orecore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

[bitcore-dash]: http://github.com/GAB5TER/orecore
[ECIES]: http://en.wikipedia.org/wiki/Integrated_Encryption_Scheme
[ryan]: http://github.com/ryanxcharles
