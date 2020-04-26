templateJsons=`ls */template.json`

for json in $templateJsons
do
  gcsJSONFilename=${json/\/template.json/.json}
  echo "Uploading ${json} => $gcsJSONFilename"
  gsutil cp "$json" "gs://anyfiddle-starter-templates/templatejsons/${gcsJSONFilename}"
done

templateThumbnails=`ls */thumbnail.png`
for thumbnail in $templateThumbnails
do
  gcsThumbnailFilename=${thumbnail/\/thumbnail.png/.png}
  echo "Uploading ${thumbnail} => $gcsThumbnailFilename"
  gsutil cp "$json" "gs://anyfiddle-starter-templates/thumbnails/${gcsThumbnailFilename}"
done