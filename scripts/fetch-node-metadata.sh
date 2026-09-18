nodes_directory="$(git rev-parse --show-toplevel)/content/nodes"
metadata="$(curl https://api.snoty.me/wiring/node/metadata -s)"

while IFS= read -r line; do
    echo "$line" | jq > "$nodes_directory/$(echo "$line" | jq -r '.type').json"
done < <(echo "$metadata" | jq -c '.[]')
