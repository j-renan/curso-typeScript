#!/bin/bash

# get current branch and push
current_branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

# git pull
#git pull origin "$current_branch"
#echo "==== BAIXANDO DA '$current_branch' BRANCH"

# get the argument message
message="$1"

Username="j-renan"

Password="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"


# If no commit message is passed, use current date time in the commit message
if [[ -z "${message// }" ]]
    then
        message=$(date '+%Y-%m-%d %H:%M:%S')
fi

# stage all changes
git add --all
echo "==== ADD TODOS OS ARQUIVOS"

# add commit
git commit -m "$message"
echo "==== ADICIONE UM COMMIT: '$message'"

# git push
git push origin "$current_branch"
echo "==== PUSH ALTERAÇÕES '$current_branch' BRANCH"



