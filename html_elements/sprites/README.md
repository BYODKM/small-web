# CSS Image Sprites

## Files & Directories

```
.
├── @1x
│   └── foo@1x.png
└── @2x
    └── bar@2x.png
    └── baz@2x.png
```

## How to Generate

```
$ npm run sprite
```

## How to Use

```
// Jade
+sprite(src="baz@2x.png" alt="")
```

```
// Stylus
sprite("baz@2x.png")
```

No need to write width, height even filepath in both cases.

## Add Folders

In case of you reach the iOS file size limits, you need to add new folders.

```
$ mkdir foo@2x
$ cp @2x.handlebars foo@2x.handlebars
```

__TODO:__ Write the new folder names on `../prepend/sprites.styl`.
