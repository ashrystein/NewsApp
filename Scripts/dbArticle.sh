#!/bin/bash

title=$(echo "2022 Apple Watch Lineup Rumored to Include New Apple Watch SE and 'Rugged' Model for Sports" | base64)
description=$(echo "Apple is planning an entire revamp of its Apple Watch lineup for 2022, including an update to the Apple Watch SE and a new Apple Watch with a rugged design aimed at sports athletes, according to respected Bloomberg journalist Mark Gurman. Writing in the" | base64)
author=$(echo "Sami Fathi" | base64)
publishedAt=$(echo "2021-12-05T16:22:08Z" | base64)
# encoded base64 image url
urlToImage="aHR0cHM6Ly9pbWFnZXMubWFjcnVtb3JzLmNvbS90L3g0b2dPRHFBaEk5a3l2R0czZFlvQXRXTHhkWT0vMTk2MHgvYXJ0aWNsZS1uZXcvMjAxNC8wOS9hcHBsZS13YXRjaC1zZXJpZXMtNy1hbHVtaW51bS1jb2xvcnMuanBn"

# Operating system parameter ios | android
OS="$1"

npx uri-scheme open "musala://NewsFeedTab/ArticleDetails/$title/$description/$author/$publishedAt/$urlToImage" --$OS