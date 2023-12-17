#!/bin/sh

echo "Next release:: $1, project: $(nx show projects --affected)"
echo "\n"
echo $(git tag $(nx show projects --affected)-v$1)
echo "\n"
echo "New tag created - $(git tag --merged hotfix-products | tail -1)"
echo "\n"
