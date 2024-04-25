const { readFileSync, writeFile } = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer(
    (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        let response = {};
        if (parsedUrl.pathname == "/create-account" && req.method == "POST") {
            const data = parsedUrl.query;
            // exception handling
            try {
                const jsonData = readFileSync("data/user.json", "utf-8");
                const users = JSON.parse(jsonData);
                users.push(data);


                writeFile("data/user.json", JSON.stringify(users), (err) => {
                    if (err) {
                        response.flag = 0;
                        response.msg = "Internal server error";
                        res.end(JSON.stringify(response))
                    } else {
                        response.flag = 1;
                        response.msg = "Account created";
                        res.end(JSON.stringify(response))
                    }
                })
            } catch (err) {
                response.flag = 0;
                response.msg = "Internal server error";
                res.end(JSON.stringify(response))
            }
        } else if (parsedUrl.pathname == "/login-user" && req.method == "POST") {
            const data = parsedUrl.query;
            try {
                const jsonData = readFileSync("data/user.json", "utf-8");
                const users = JSON.parse(jsonData);

                const found = users.find(user => {
                    if (user.email == data.email && user.password == data.password) {
                        return true;
                    } else {
                        return false;
                    }
                })
                if (found) {
                    response.flag = 1;
                    response.msg = "Login successfull";
                    res.end(JSON.stringify(response))
                } else {
                    response.flag = 0;
                    response.msg = "Invalid credentails";
                    res.end(JSON.stringify(response))
                }

            } catch (err) {
                response.flag = 0;
                response.msg = "Internal server error";
                res.end(JSON.stringify(response))
            }
        }

    }
)

server.listen(5000, () => console.log('Server started'));