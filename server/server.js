// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const cors = require('cors')



// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(cors())
app.use(
  cookieSession({
    name: 'session',
    keys: ['lighthouse', 'final'],
  })
);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);


app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/user");
const widgetsRoutes = require("./routes/widgets");
const postsRoutes = require("./routes/posts");
const postRoutes = require("./routes/post");
const newPostsRoutes = require("./routes/new_posts");
const editPostsRoutes = require("./routes/edit_posts");
const deletePostsRoutes = require("./routes/delete_posts");
const newCommentRoutes = require("./routes/new_comment");
const editCommentRoutes = require("./routes/edit_comment");
const deleteCommentRoutes = require("./routes/delete_comment");
const authRoutes = require("./routes/auth");
const loginRoutes = require("./routes/login");
const verifyToken = require("./routes/helpers");
const categoryRoutes = require("./routes/category_posts");
const userPostsRoutes = require("./routes/profile_page/user_posts");
const childrenRoutes = require("./routes/profile_page/children_list");
const babySitterRoutes = require("./routes/baby_sitter/baby_sitter");
const commentRoutes = require("./routes/comments");


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/user", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use("/api/posts", postsRoutes(db));
app.use("/api/newposts", newPostsRoutes(db));
app.use("/api/editpost", editPostsRoutes(db));
app.use("/api/post", postRoutes(db));
app.use("/api/deletepost", deletePostsRoutes(db));
app.use("/api/newcomment", newCommentRoutes(db));
app.use("/api/editcomment", editCommentRoutes(db));
app.use("/api/deletecomment", deleteCommentRoutes(db));
app.use("/api/auth", authRoutes(db));
app.use("/api/login", loginRoutes(db));
app.use("/api/verifytoken", verifyToken);
app.use("/api/category", categoryRoutes(db));
app.use("/api/user_posts", userPostsRoutes(db));
app.use("/api/children", childrenRoutes(db));
app.use("/api/babysitter", babySitterRoutes(db));
app.use("/api/comments", commentRoutes(db));

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
