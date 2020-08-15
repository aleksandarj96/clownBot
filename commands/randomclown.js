module.exports = {
    name: 'randomclown',
    descpription: "picks a random clown and sends an image of them",
    execute(message, args){

        var clowns = ['images/ismail.png', 'images/jocke.png', 'images/adam.png', 'images/clownatdesk.jpg', 'images/widealeks.jpg']

        message.channel.send("Look at this clown right here :point_down:", {
            files: [
                clowns[Math.floor(Math.random() * clowns.length)]
            ]
        })
    }
}
