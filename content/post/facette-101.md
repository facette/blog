---
title: Facette 101
date: 2014-07-31T18:43:00
author: dev
slug: facette-101
---
You've decided to give Facette a try with your metrics, good for you! After
installing [the latest version][releases], open your browser and point it to
the address it is listening on — that would be
[http://localhost:12003][localhost] if using the default settings — and
\*BAM!*, here you are:<!--more-->

![snapshot](/images/2014/07/facette101-homepage.png)

Nothing much to be seen so far, let's do something about it: get to the
~~choppa~~ administration panel by clicking on the cog-shaped icon next to the
logo in the upper left corner:

![snapshot](/images/2014/07/facette101-admin_homepage.png)

We're going to create our very first graph by heading to the *Graphs* section
of the library in the navigation bar on the left side of the screen. From
there, click on the **+** (*plus*) sign next to the section title to create a
graph.

Our first graph will feature 3 series of metrics from the host
*host1.example.net*, acquired through the provider "collectd":
*load.shortterm*, *load.midterm* and *load.longterm*.

Note: when focusing a field, type a **?** (*question mark*) sign to show the
auto-completion:

![snapshot](/images/2014/07/facette101-admin_newgraph1.png)

Now that we've added the 3 series to the metrics list, we move on the the next
step by clicking on the *Next* button.

This step allows us to set up how the series are handled: among other things,
we can rename them, assign them a custom color or re-order the list. For the
exercise, we will rename the series *serie0*, *serie1* and *serie2* into
*1mn*, *5mn* and *15mn*. To rename a series, click on the pen-shaped icon next
to its name:

![snapshot](/images/2014/07/facette101-admin_newgraph2.png)

Once our series are renamed, we click on the *Next* button to move on to the
final step of the graph creation:

![snapshot](/images/2014/07/facette101-admin_newgraph3.png)

The last step gives us a live preview of our graph, and we have to give it a
name. We can also tweak some of the graph properties, such as the style of the
plots (line or area-shaped), add a description or set labels for the Y-axis.
Let's add a description and choose to represent our plots as lines:

![snapshot](/images/2014/07/facette101-admin_newgraph4.png)

Finally, after saving your graph you will find it showing up in the graphs
list:

![snapshot](/images/2014/07/facette101-admin_newgraph5.png)

Getting back to the "public" side of Facette by clicking on the arrow-shaped
icon next to the logo in the upper left corner, we access our newly created
graph by typing "load" in the homepage search field:

![snapshot](/images/2014/07/facette101-firstgraph.png)

That was easy, wasn't it? ;-)

![snapshot](/images/2014/07/nailed_it.jpg)

Let's take this a step further, introducting *collections*. Collections allow
you to group graphs on a same page, for instance graphs relating to the same
host.

Using the same method described earlier, I created a second graph titled
"host1.example.net — network traffic" featuring *host1.example.net*'s `eth0`
network interface inbound and outbound traffic.

To create a new collection, head to the *collection* section in the
administration panel and click on the **+** (*plus*) sign next to the section
title. Then, start typing the title of the graphs you want to add to the
collection — the auto-completion will help you and click on the *Add* button
to add them to the graphs list:

![snapshot](/images/2014/07/facette101-admin_newcollection1.png)

Once you're done, move on to the next step and finalize the collection
creation by giving it a name — let's say "host1.example.net" — and save it.

Back to the public side, you can now see our collection appear in the list on
the left: click on it to browse it.

![snapshot](/images/2014/07/facette101-collection.png)

Stay tuned for more articles diving into the details and features of Facette!

[localhost]: http://localhost:12003
[releases]: https://github.com/facette/facette/releases