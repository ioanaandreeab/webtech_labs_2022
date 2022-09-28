# Web tech labs
## _Lab 1_
### Git and version control
**What is Git?**

Git is a _free and open source distributed version control system_. What does that mean? It is basically a database that's distributed among those who have access to it and that tracks all changes that are being made to (usually) the source code of a project. It was introduced in 2005 by Linus Torvalds, who also created Linux.

**Why do we need Git?**
- better collaboration
- information integrity
- flexibility in developing new features

**What is a repository?**
In Computer Science, a repository refers to central location in which data is stored and managed, the main source of the code.
An important thing to note about a Git repository is that it can store multiple versions of the code, independent from each other, corresponding to the so-called _branches_. Branches allow developers to work on certain features, keep them in sync with the main branch (the source of truth) and _merge_ them into the main branch when they are ready. Down below you can see an example of how the structure of a Git repo can evolve!

![](https://uploads.sitepoint.com/wp-content/uploads/2019/06/155993572204-gitflow.png)
#
🤔 The master branch is the main one, we don't use that naming anymore, find out more [here](https://www.theserverside.com/feature/Why-GitHub-renamed-its-master-branch-to-main).

**Which are the most useful Git commands?**
- **git clone** - makes a _local_ clone of the _remote_ repository
- **git init** - creates an empty _local_ repository
- **git remote add origin** - links the local repo to the remote one
- **git checkout** - updates the local file to match a particular branch (when used with the flag **-b** it creates a new branch originating from the current one)
- **git add** - adds the changes that will be included in the following commit
- **git commit** - captures the state of the project at a moment in time (usually used with the flag **-m** to specify a suggestive message so we know what the changes represent)
- **git push** - transfers the local changes to the remote repo
- **git pull** - updates the local repo to match the remote one
- **git status** - prints out the local state of the changes
- **git log** - shows latest commits
- **git config** - sets config variables, we use it to set the _email_ and the _name_ so that the remote repo knows who's making the changes
#
🤔 Feeling extra curious? [Here](https://www.youtube.com/watch?v=f1wnYdLEpgI) and [here](https://www.youtube.com/watch?v=ElRzTuYln0M) you can find clips about some advanced (and really cool) features of Git