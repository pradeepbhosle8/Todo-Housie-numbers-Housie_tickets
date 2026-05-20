# Git Cheat 
## Getting Started

*Start a new repo:*
```javascript
git init
```

*Clone an existing repo:*
```javascript
git clone <url>
```

*Prepare to Commit*

_Add **untracked** file or **unstaged** changes:_
```javascript
git add <file>
```
_Add **all untracked files** and **unstaged** changes:_
```javascript
git add .
```

*Choose which parts of a file to stage:*
```
git add -p
```
*Move file:*
```
git mv <old> <new>
```
*Delete file:*
```
git rm <file>
```

*Tell Git to forget about a file without deleting it:*
```
git rm --cached <file>
```

*Unstage one file:*
```
git reset <file>
```

*Unstage everything:*
```
git reset
```

*Check what you added:*
```
git status
```

*Make a commit:*
```
git commit -m 'message'
```

*Create a branch:*
```
git checkout -b <name>
or
git switch -c <name>
```

*Switch branches:*
```
git checkout <name>
or
git switch <name>
```

*List branches:*
```
git branch
```

*List branches by most recently committed to:*
```
git branch --sort=-committerdate
```

*Delete a branch:*
```
git branch -d <name>
```

*Force delete a branch:*
```
git branch -D <name>
```

*Diff all staged and unstaged changes:*
```
git diff HEAD
```

*Diff just staged changes:*
```
git diff --staged
```

*Diff just unstaged changes:*
```
git diff
```

*merge the specified branch’s history into the current one*
```
git merge [branch]
```

*show all commits in the current branch’s history*
```
git log
```