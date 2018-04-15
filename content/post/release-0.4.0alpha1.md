---
title: Facette 0.4.0alpha1 released
date: 2017-06-21T14:24:00
author: dev
slug: facette-0-4-0alpha1-released
---
It's been an awfully long time since the latest release, and we're truly sorry
for that. However here's the good news: the first alpha release of Facette
0.4.0 is here, and there's a lot to say about it.<!--more-->

## "The only thing that's changed is everything"

The reason why it's been so long since the last version of Facette is simple.
The code started to feel more and more difficult to maintain, and we've come
to the only logical conclusion: we had to rewrite everything, from back-end to
front-end. It's been a tremendous amount of work, and so much has changed
internally it was simply not possible to do it gradually from version to
version.

## What's new in Facette 0.4.0

### TL;DR

* Front-end rewritten from scratch 
* Back-end rewritten from scratch
* SQL Database-backed storage (MySQL, PostgreSQL, SQLite)
* YAML-based configuration file format
* Collection templates
* Collection/graph aliasing (permalinks)
* Variable columns collection graphs display
* Support for API batch queries
* Built-in UI files
* UI localization
* Performance improvements

### Front-end rewritten from scratch

The new front-end is now a single-page application (SPA) that fully relies on
the back-end API to operate.

It uses [AngularJS][angularjs] instead of hand-made JavaScript and
[d3.js][d3js] for graph rendering, thus resolving the
[licensing issue][issue-300] with Highcharts JS library.

This redesigned front-end comes with various improvements and new features,
such as:

* _Provider_ management through the web UI
* Simplified graph creation workflow
* Drag'n'drop support to manage data reordering
* Better pagination support
* Foldable side bar
* Multiple columns display in collections
* Basic responsiveness support
* Keyboard friendly UI
* Integrated color picker
* Alternative operations shortcuts when pressing `Alt` key

### Back-end rewritten from scratch

As for the front-end, the back-end code architecture was suffering from design
issues and implementing new features was proving difficult on the long run.
This new implementation benefits from those previous design mistakes and
should be more future-proof.

### SQL Database-backed storage (MySQL, PostgreSQL, SQLite)

The previous versions of Facette were storing library items as flat JSON files
locally on the filesystem. It turned out to be both ineffective
performance-wise at scale, and limiting regarding the features we wanted to
implement. As a result, we've opted for a natural evolution of the back-end by
storing in a RDBMS not only the Facette library, but also the _providers_
configuration.

We acknowledge this change may not be welcomed by everybody, as database
systems are a potential source of operational complexity. However the good
news is that besides **MySQL** and **PostgreSQL**, we also made sure to
support **SQLite** for small and simple Facette deployments. Facette 0.4.0
comes with a new `facettectl` utility providing _dump/restore_ features to
back up your Facette setup easily, and switch from a RDBMS system to another
seamlessly.

### YAML-based configuration file format

In order to simplify the back-end configuration management, we've decided to
switch to the well-known [YAML][yaml] format. Converting JSON to YAML is easy,
plus you'll finally be able to use comments in your configuration file :)

### Collection templates

[Graph templates][dive-graph-templates] – introduced in in Facette 0.3.x –
allowed you to standardize graphs by creating a reference _template_ that can
be instantiated many times by specifying _attributes_ to customize the final
graph, e.g. changing the name of the source or the name of a metric. Today
Facette gets even more flexible by bringing the same feature to collections:
you can now create a collection _template_ referencing graph _templates_ (or
even plain graphs if you want), and instantiate it specifying attributes such
as a source name: when displaying the instantiated collection, all of its
graphs will be rendered by inheriting the collection attributes.

Collection templates is an essential feature for the users using Facette in
medium to large setups.

### Collection/graph aliasing (permalinks)

Although cosmetic, this new feature will come in handy when you exchange links
to Facette graphs or collections with somebody: instead of the cryptic
resource UUID in the URL it is now possible to set an _alias_ to graphs and
collections, making URLs both more user-friendly and persistent.

### Variable columns collection graphs display

A new user interface mode has been implemented to display graphs in 2 or even
3 columns, very convenient to see more graphs at a glance. Also, the lateral
navigation bar is now fold-able to give more room to graphs displaying –
perfect for monitoring dashboards!

### Support for API batch queries

To avoid round trips when multiple operations needs to be performed on the
API, a new `/bulk` endpoint has been created. See [documentation][doc-bulk]
for details.

### Built-in UI files

In order to simplify even more Facette deployments, we now also ship the web
UI files built-in to the back-end binary.

### UI localization

Starting with this release, Facette supports UI localization. In addition to
English, French is now available. Contributions for more languages are
welcome!

### Performance improvements

This new version of Facette brings a lot of improvements at every level,
especially much better to the web UI reactivity and precision in the time
series rendering.

## ⚠️ Caution! Wet paint ⚠️

This is an alpha release of Facette: despite our best efforts and weeks of
real-life testing, given the amount of internal changes we expect bugs and
problems. Please test it and report any issue you might encounter at
[Github][github-issues] and we'll do our best to fix them in order to release
a stable 0.4.0 version as soon as possible.

As usual, Linux packages and various pre-compiled versions are available on
[Github][github], and the image is up-to-date on the [Docker Hub][docker].

[angularjs]: https://angularjs.org/
[d3js]: https://d3js.org/
[dive-graph-templates]: /2015/03/23/dive-into-facette-graph-templates/
[doc-bulk]: https://docs.facette.io/latest/api/bulk/
[docker]: https://hub.docker.com/r/facette/facette/
[github-issues]: https://github.com/facette/facette/issues
[github]: https://github.com/facette/facette/releases/tag/0.4.0alpha1
[issue-300]: https://github.com/facette/facette/issues/300
[yaml]: http://yaml.org/