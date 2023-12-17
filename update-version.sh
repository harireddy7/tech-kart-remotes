#!/bin/sh


echo "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
git tag --merged hotfix-products
echo "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

echo "\n"
echo "Next release:: $1, project: $(nx show projects --affected)"
echo $(git tag $(nx show projects --affected)-v$1)
echo "New tag created - $(git tag --merged hotfix-products | tail -1)"
echo "\n"

echo "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
git tag --merged hotfix-products
echo "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

