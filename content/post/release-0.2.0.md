---
title: Facette 0.2.0 released
date: 2014-09-10T23:23:00
author: dev
slug: facette-0-2-0-released
---
Here it is: the first big Facette milestone since its first release. We're
happy to announce the version [0.2.0][release], that comes with a nice load of
bug fixes, new features and various improvements.<!--more-->

## New in 0.2.0

### InfluxDB connector

Due to popular demand, we've implemented a connector to query metrics stored
in a [InfluxDB][influxdb] database. This connector is experimental at the
moment, and supports InfluxDB up to version 0.7.x. Check out the Facette
[documentation][doc-connectors] to see how to configure a provider using the
`influxdb` connector.

### UNIX socket support for backend

When using Facette through a reverse proxy on the same host, it is now
possible to access the back-end server using a UNIX socket instead of a TCP
connection to both reduce network overhead and improve security. Thanks to
Skrupellos for [this contribution][github-unixsocket].

### "sieve" provider filter

The new `sieve` filter does the opposite of the `discard` filter: it only lets
records whose target match the rule pattern pass through.

### Series operations

Series operations — sum, average etc. — can now be performed on series coming
from different origins, as the caculations are now handled internally by
Facette.

This new version also introduces a new series operation: _normalize_. It
aligns several series with different precisions on common time step (this is
also done implicitely for _sum_ and _average_ operations).

### Read-only mode

A *read-only* mode has been implemented to expose a Facette instance with all
data-altering API calls disabled. It can be useful when you want to provide a
"looking glass" graph front-end to you users and you don't want them to modify
defined graphs and collections.

### Embeddable graphs

Graphs toolbar now feature a "Embeddable graph" button that links the graph to
a standalone view that can for instance be embedded in a page through a HTML
`iframe` from another dashboard:

![](/content/images/2014/Aug/sshot_facette_embedable_graph.png)

### Multiple fixed graph plot lines

It is now possible to display multiple fixed plot lines on a graph to
highlight significative values from the legend:

![](/content/images/2014/Aug/sshot_facette_multiple_fixed_plotlines-1.png)

### Series auto-naming

Series added to graphs at creation/modification stage are now automatically
pre-named according to their origin/source/metric names instead of the
previous *serie#* name.

### Foldable graph legends

Graph legends are now foldable, and are folded by default to save space at
collections display: click on the arrow a the bottom of a graph to expand the
legend.

### Series per stack sums

Tooltips on graphs now display the sum of the series values for each point.
When using stacks, sums are displayed per stack.

![](/content/images/2014/Sep/sshot-facette-tooltip-sum-1.png)

### Toggle graphs visibility in collections

If you created a *collection*, it is now possible to "hide" a graph included
in that collection without having to remove it and add it later if need be. In
a collection edition page, just click on the toggler near the graph name and
it won't be displayed in the collection page.

### Graphs collections auto-refresh

You can now set an automatic refresh delay at graph-level or collection-level.

### Docker image support

A `Dockerfile` is now provided with the sources to build a Docker image
straight from the source tree. Thanks to Michael Crosby from Docker for
[this contribution][github-dockerfile].

### OpenSearch support

The landing page search bar is now available through the
[OpenSearch][opensearch] standard.

You can now search directly for Facette's items in your favorite browser.

### HiDPI displays support

Facette now looks better when displayed on HiDPI-compatible (a.k.a. "Retina")
screens.

### Shortcut links

Shortcut links are now available to help switching between edition and display
modes when dealing with graphs and collections.

## Changes

### Base server settings are now optional

Prior to version 0.2.0 some base server settings were mandatory: default
values are now set for all settings, refer to the documentation for the
details.

### Server catalog refresh API call removed

For consistency purpose we decided to remove the API call and front-end
controls allowing to refresh server catalog from the front-end in favor of the
[facettectl][doc-usage] utility.

### Provider filter rules format

The provider filtering rules format has changed and is incompatible with the
previous versions: please refer to the [filters documentation][doc-filters] to
adapt your filtering rules. We're sorry for the inconvenience, but this was a
necessary change to support matched pattern suppression (see
[this Github issue][github-filters] for further explanations).

## Dude, where are my graphs?

As a side-effect of the new feature enabling to toggle graph visibility in a
collection, all graphs listed in a collection will be **hidden by default**
when you upgrade from 0.1.x to 0.2.0. Here is a little Python code snippet
that you can drop in a shell to "convert" your existing collection definitions
to the new format (don't forget to adapt the path to your actual Facette
collections directory in the `$FACETTE_COLLECTIONS` variable):

```shell
export FACETTE_COLLECTIONS="/var/lib/facette/collections/"
cat <<EOF | python - $FACETTE_COLLECTIONS
import json
import os
import sys

for root, _, files in os.walk(sys.argv[1]):
    for file in files:
    collectionFile = os.path.join(root, file)

    print "* Converting data file", os.path.join(collectionFile)

    cfp = open(collectionFile, 'rw')
    collection = json.load(cfp)
    cfp.close()

    for entry in collection["entries"]:
        entry["options"]["enabled"] = True

    cfp = open(collectionFile, 'w')
    json.dump(collection, cfp, indent=4)
    cfp.close()
EOF
```

## Thank you

Thank you to our first users and especially early contributors: it's nice to
see that Facette is getting some traction and visibility that soon, and your
feedbacks help us improving this software.

[doc-connectors]: http://docs.facette.io/configuration/connectors/
[doc-filters]: http://docs.facette.io/configuration/filters/
[doc-usage]: http://docs.facette.io/usage/
[github-dockerfile]: https://github.com/facette/facette/pull/82
[github-filters]: https://github.com/facette/facette/issues/97
[github-unixsocket]: https://github.com/facette/facette/pull/109
[influxdb]: http://influxdb.com/
[opensearch]: http://www.opensearch.org/Home
[release]: https://github.com/facette/facette/releases/tag/0.2.0