---
title: Ship It!
date: 2014-07-05T19:08:00
author: dev
slug: ship-it
---
After being told this for months, we are excited to announce the first public
release of Facette!

You can [download Facette 0.1.0][release] from Github, and the documentation
is available [here][doc-home].

![Here comes a new challenger!](/images/2014/07/new-challenger.png)

Facette is a web application to display time series data from various sources
— such as [collectd][collectd] or [Graphite][graphite] — on graphs. Big deal,
I know. However, one of the strengths of Facette is to be able to display
metrics from different tools *on the same graphs, seamlessly*. Other good
news, as the webapp is developed in Go it has very few dependencies and is
super easy to deploy.

We've worked very hard to provide a simple yet complete user interface to
build and manage graphs, and expose a comprehensive RESTful [API][doc-api] for
those who want to use Facette as a powerful building block or to automate its
catalog and library management.

We're just getting started and we have big plans for the future: new
connectors, UI improvement... Stay tuned! You can follow us on
[Twitter][twitter].

## Caution, wet paint

Since this is our first release, you can expect bugs: please report them on
[Github][github-issues]. We're open to suggestions and contributions, but
please open an issue to tell us about it **before** sending any pull request.

[collectd]: http://collectd.org/
[doc-api]: http://docs.facette.io/api/
[doc-home]: http://docs.facette.io/
[github-issues]: https://github.com/facette/facette/issues
[graphite]: http://graphite.readthedocs.org/
[release]: https://github.com/facette/facette/releases/tag/0.1.0
[twitter]: http://twitter.com/FacetteIO
