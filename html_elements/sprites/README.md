# CSS Image Sprites

## Files & Directories

```
.
├── @1x
│   └── foo@1x.png
└── @2x
    └── foo@2x.png
    └── bar@2x.png
```

## How to Generate

```
$ npm run sprite
```

## How to Use

```
// In Jade
+sprite(src="foo@2x.png" alt="")
```

```
// From Stylus
sprite("foo@2x.png")
```

No need to write width, height and even filepath in both cases.

## Add Folders

In case of you reach the iOS file size limits, you need to add new folders.

```
$ mkdir new@2x
$ cp @2x.handlebars new@2x.handlebars
```

__TODO:__ Write the new folder names on `../styles/sprites.styl`.
