# MOMLscraper metadata harvester bookmarklet
When it comes to scrape publishers' content platforms, security measures often are an issue, which prevent you to use a shell/script based tool from command line, even if you try very hard to mock a desktop web browser application.<br>In particular this was the issue while trying to obtain some core metadata elements and linking Ids for the 'Making of Modern Law' collection hosted by Gale to feed it to our library catalogue to make this content more visible and easier to use to our patrons. Eventually a lightweight bookmarklet seemed a feasible option in pursuing this aim. The code may also be adapted to apply for other platforms and collections.<br>The bookmarklet has been developed an tested with Firefox v126.0<br><br>
## Usage
+ create a new bookmark (bookmark toolbar is recommended for ergonomic use) and assign a name of your favour
+ copy JavaScript code to the bookmark's URL field and save
+ go to the respective content platform and retrieve the items you want to obtain matching metadata for
+ open browser console for output (Firefox: Strg+Shift+I)
+ clear console, hide other output channels than 'Log' (e.g. errors, warnings, debug...)
+ click the bookmark you created in the first place and copy output from the console to further processing
+ you are advised to use the bookmark not more than once for each retrieval subset; to receive the same metadata again, please first browse for a different content in this window and retrieve the subset again to start over (this issue is still matter of enhancement)
