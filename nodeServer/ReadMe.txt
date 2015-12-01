

=============================================
Part1:
=============================================

SQL Source Files(Folder)
-----------------------
Contains:
.........
majestic_schema.sql
clean_data.sql
query_india_domains.sql
query_top_domains.sql
query_wikipedia.sql


SQL Loader
---------------

Loader Files (Folder)
-------------------
Contains:
CLT files for each table.
Data file - majestic.csv
timestamper - notes the loading time for sql load run - for each table
Script - script.sh
run as:::::  sh load_data.sh <username> <password>


Time of Executions -
----------------------
“MAJESTIC”  	  ------ 24 seconds
00:54:17
00:54:41

//Takes longest to load as no indexing is done.
-----------------------


“MAJESTIC_INDEX1” ------ 21 seconds
00:54:41
00:55:02

//Takes lesser time than no indexing as TLD indexing is done.
-----------------------


“MAJESTIC_INDEX2” ------ 22 seconds
00:55:02
00:55:23

//Takes lesser time than no indexing as RefSubNet indexing is done.
-----------------------


“MAJESTIC_INDEX3” ------ 20 seconds
00:55:23
00:55:43

//Takes least time as indexing is done both on TLD and RefSubNet
-----------------------


=====================================================================
Part 2
=====================================================================

majestic.js
views(folder) containing HTML files

Running the website:
http://129.110.92.21:7963/domain/no_index
http://129.110.92.21:7963/domain/index1
http://129.110.92.21:7963/domain/index2
http://129.110.92.21:7963/domain/index3
http://129.110.92.21:7963/tld/no_index
http://129.110.92.21:7963/tld/index1
http://129.110.92.21:7963/tld/index2
http://129.110.92.21:7963/tld/index3

