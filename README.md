node-ral
===========

[![Build Status](https://travis-ci.org/fex-team/node-ral.svg?branch=master)](https://travis-ci.org/fex-team/node-ral)
[![Coverage Status](https://coveralls.io/repos/fex-team/node-ral/badge.png)](https://coveralls.io/r/fex-team/node-ral)

## TODO

*Future Feature*

***Internal Only***

**Complicate**

- Base
    - [X] Config
    - [X] Balance
    - [X] Logger
    - [X] Converter
    - [X] Protocol
    - [X] **RAL**
    - [ ] *Filter*
- Ext
    - Config
        - [ ] BNS Support
        - [ ] **BNS Update**
    - Balance
        - [X] RandomBalance
        - [X] RoundRobinBalance
    - Filter
        - [ ] *ConnectFilter*
        - [ ] *HealthFilter*
    - Converter
        - [X] JSON
        - [X] String
        - [X] UrlEncode
        - [X] **Form**
        - [ ] ***Mcpack***
        - [ ] *Protobuf*
        - [ ] *Msgpack*
    - Protocol
        - [X] HTTP
        - [ ] ***NsHead***
        - [ ] *Socket*
        - [ ] *HTTPS*
- Issue
    - [ ] Form unpack support GBK when use form-urlencoded
    - [X] Use Stream in Protocol
    - [X] Use Stream in Converter