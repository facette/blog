---
title: Facette 0.3.0rc1 released
date: 2015-03-23T12:54:00
author: dev
slug: facette-0-3-0rc1-released
---
The long overdue 0.3.0 release is finally around the corner! We've decided to
[release][0] the next version of Facette as a *release candidate* due to the
number of changes and new features: although we've done our best to test it
and run it in production for weeks to squash bugs, we'd like users to provide
feedback before releasing the 0.3.0 version.<!--more-->

## New in 0.3.0rc1

### KairosDB connector

Connectors are what make Facette's value, and it's always a big deal to us
when we can add support for another time series datastore. It's an even bigger
deal when a whole new connector is provided to us by another open source
community fellow: we'd like to thank again [Andreas Schulze][1] for his
precious contribution with the [KairosDB][2] connector.

### Graph templates

We acknowledge that deploying Facette in a real production environment is not
the same using it for simple personal needs, and managing large libraries with
hundreds of graphs is currently quite tiresome.

We're introducing in this release a more convenient way to create graphs
dynamically using graph templates: instead of manually creating similar graphs
– e.g. for clusters or similar services – you only create a template that is
applied to multiple graph instances that are provided with the "changing"
attributes such as the source and parts of the metric name. Learn how to use
templates in [this post][6].

As with the rest of the backend, templates and templated graph management is
available through the [REST API][5].

### Support for TLS in InfluxDB connector

As asked by someone who contacted us via email, TLS connection to a backend is
now available in the InfluxDB connector: check the documentation to learn how
to enable it.

### Support for multiple consolidation functions in RRDtool connector

The `rrd` connector has been improved to support all
[consolidation functions][4] available in the RRDtool files, generating one
metric per CF.

__Important__:

As for now consolidation functions will suffix metrics names, so it might
break some of your old graphs.

If you want to mimic old Facette versions behavior you can add the following
lines at the top of your providers filters:

```json
…
  "filters": [
    { "action": "sieve", "target": "metric", "pattern": "/average$" },
    { "action": "rewrite", "target": "metric", "pattern": "/average$", "into": "" },
    …
  ]
…
```

### File loading speed-up

File tree walking is now powered by a concurrent walking function, in some
cases dramatically improving file parsing performance with large file
collections.

### Customizable consolidation function

It is now possible to choose which consolidation function to apply – e.g.
*min*, *max*, *average*, *sum*, *last*... – when grouping and/or normalizing
series.

### Collections display improvements

The web UI has gotten some love too, with new features such as:

* on-the-fly global periodic refresh timer
* on-the-fly global time period selection
* global legend [un]folding toggle switch

### API changes

The `/api/v1/graps/plots` REST API endpoint has been changed to
`/api/v1/plots`.

### Bug fixes

As always, this release fixes a number of bugs and glitches. We do our best to
improve Facette by using it daily in a production environment, but with the
addition of new connectors it becomes harder to cover every possible use case:
your feedback is extremely valuable to us, don't hesitate to open an issue at
Github, contact us via email or reach out to us on [Twitter][3].

[0]: https://github.com/facette/facette/releases/tag/0.3.0rc1
[1]: https://github.com/iaean
[2]: https://github.com/kairosdb/kairosdb
[3]: https://twitter.com/FacetteIO
[4]: http://oss.oetiker.ch/rrdtool/doc/rrdcreate.en.html#IRRA_CF_cf_arguments
[5]: http://docs.facette.io/api/library/
[6]: https://blog.facette.io/2015/03/23/dive-into-facette-graph-templates/