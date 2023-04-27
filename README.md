# indexer

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno)](https://deno.land/x/indexer)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/indexer/mod.ts)
[![Test](https://github.com/lambdalisue/deno-indexer/workflows/Test/badge.svg)](https://github.com/lambdalisue/deno-indexer/actions?query=workflow%3ATest)

The `indexer` library is a [Deno][deno] module that provides a class called
`Indexer`, which generates index numbers.

## Usage

To use the `Indexer` class, you first need to import it from the `indexer`
module:

```typescript
import { Indexer } from "https://deno.land/x/indexer/mod.ts";
```

You can then create a new instance of the `Indexer` class with an optional `max`
value:

```typescript
const indexer = new Indexer(10);
```

This creates an `Indexer` instance with a maximum index value of 10. If the
`max` parameter is omitted, the maximum safe integer value will be used instead.

You can generate index numbers by calling the `next()` method on the `Indexer`
instance:

```typescript
const index1 = indexer.next(); // 0
const index2 = indexer.next(); // 1
const index3 = indexer.next(); // 2
// ...
const index10 = indexer.next(); // 9
```

When the index number reaches the maximum value, it will be reset to 0 and the
`next()` method will start generating index numbers from 0 again.

## License

The code follows the MIT license written in [LICENSE](./LICENSE). Contributors
need to agree that any modifications sent in this repository follow the license.

[deno]: https://deno.land/
[indexer]: https://github.com/indexer/indexer/blob/master/spec.md
[deno-x-indexer]: https://deno.land/x/indexer
[doc-deno-land-indexer]: https://doc.deno.land/https/deno.land/x/indexer/mod.ts
