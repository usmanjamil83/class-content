module.exports = function(sequelize, DataTypes) {
 // Add code here to create a Post model
 // This model needs a title, a body, and a category
 // Don't forget to 'return' the post after defining
 var post = sequelize.define("post", {
 	title: DataTypes.STRING,
 	validate:{
 		notnull: true
 	},
 	body: DataTypes.TEXT,
 	validate:{
 		notnull: true
 	},
 	category: DataTypes.STRING
 });
 return post;
};