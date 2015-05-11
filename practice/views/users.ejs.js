<html>
<body>
    <h2>Here are all the users:</h2>
    <% for (var x in users) { %>
        <h3>Name: <%= users[x].name %></h3>
        <h4>Email: <%= users[x].email %></h4>
        <hr>
    <% } %>
    	<button type="submit" value="submit">User1</button>
       <a href='/'>go back</a>
</body>
</html>