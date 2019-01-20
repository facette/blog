---
title: Facette 0.5.0rc1 released
date: 2019-01-20T00:00:00
author: dev
slug: facette-0-5-0rc1-released
---
We know that it's been quite some time since the latest release. But wait no
more, the first *release candidate* of the 0.5.0 is here!<!--more-->

## What's new

### TL;DR

* Warm startup
* Syslog logging
* Keyboard shortcuts
* Duration Y axis unit
* Y axis extremes support
* Aliases in the URLs
* Rearranged configuration
* UI improvements

### Warm startup

Using Facette with back-ends having thousands of sources and metrics
can really slow down its startup process.

Starting with this release, Facette will persist its internal catalog state
across restarts to ensure the service is available as quickly as possible when
launched.

### Syslog logging

Along with console and file logging previously available in Facette. It's now
possible to send logging information to a local or a remote Syslog instance.

See [configuration](docs-config) for details.

### Keyboard shortcuts

Keyboard shortcuts support has been added to the front-end. By pressing
“?” you'll be presented a list of available shortcuts to perform basic actions
or to jump to different sections of the front-end UI.

![](/images/2019/01/facette-keyboard_shortcuts.png)

### Duration Y axis unit

Facette now supports a “duration” Y axis unit type. Choosing duration and
a base unit will automatically format values as durations.

![](/images/2019/01/facette-duration_unit.png)

### Y axis extremes support

Extreme bounds support has been added to the front-end rendering of graphs. By
setting minimum and/or maximum values, you can limit the range of the rendered
area.

### Aliases in the URLs

As of today, graphs and collections aliases are supported in the URL. This will
allow the usage of user friendly URLs instead of Facette’s internal identifiers.

### Rearranged configuration

The configuration has been rearranged into functional sections, making the old
configuration incompatible.

See [example configuration](examples-config) for details.

### UI improvements

This release comes with a lot of fixes and minor improvements to the front-end
side of Facette.

Last but not least, some under-the-hood changes in this release:

* the switch to HTML Canvas for graphs rendering, greatly improving the UI
  responsiveness when browsing quite large collections;
* provider startup errors are now reported in the associated
  administration panel section, to avoid looking at the logs in case of
  a simple misconfiguration;
* missing data points interpolation has been drop, automatically detecting gaps
  to prevent rendering bugs.

## ⚠️ Caution️

Despite our best efforts, you may experience some bugs and problems. Please
test it and report any issue at [GitHub][github-issues].

As usual, Linux packages and various pre-compiled versions are available on
[GitHub][github] and on the [Docker Hub][docker].

[docker]: https://hub.docker.com/r/facette/facette/
[docs-config]: https://docs.facette.io/latest/configuration/
[examples-config]: https://raw.githubusercontent.com/facette/facette/0.5/docs/examples/facette.yaml
[github-issues]: https://github.com/facette/facette/issues
[github]: https://github.com/facette/facette/releases/tag/0.5.0rc1
