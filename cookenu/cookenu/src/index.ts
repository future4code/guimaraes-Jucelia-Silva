import app from "./app"
import createUser from "./endpoints/SignUp"
import login from "./endpoints/Login"
import getOwnProfile from "./endpoints/GetUserProfile"
import getAnotherUserProfile from "./endpoints/GetAnotherUserByld"
import registerRecipe from "./endpoints/RegisterRecipe"
import getRecipe from "./endpoints/GetRecipeByld"
import followUser from "./endpoints/FollowUser"
import unfollowUser from "./endpoints/UnfollowUser"
import getFeedRecipes from "./endpoints/GetFeedRecipes"
import editRecipe from "./endpoints/EditRecipe"
import deleteRecipe from "./endpoints/DeleteRecipe"
import deleteUser from "./endpoints/DeleteUserAccount"

// USUÁRIOS

app.post("/signup", createUser)
app.post("/login", login)
app.get("/user/profile", getOwnProfile)
app.get("/user/:id", getAnotherUserProfile)
app.delete("/deleteuser/:id", deleteUser)

// RECEITAS

app.post("/recipe", registerRecipe)
app.get("/recipe/:id", getRecipe)
app.get("/feedrecipes", getFeedRecipes)
app.put("/editrecipe/:id", editRecipe)
app.delete("/deleterecipe/:id", deleteRecipe)

// SEGUIR E DEIXAR DE SEGUIR USUÁRIO

app.post("/user/follow", followUser)
app.post("/user/unfollow", unfollowUser)
