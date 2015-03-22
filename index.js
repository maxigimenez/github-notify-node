#!/usr/bin/env node

var program = require('commander'),
    Table = require('cli-table'),
    async = require('async'),
    Github = require('github'),
    storage = require('node-persist'),
    colors = require('colors');

storage.initSync();

program
    .version('0.0.1')
    .usage('[options]')
    .option('-u, --user [name]', 'Github user')
    .option('-r, --repository [repository]', 'Github repository to fetch pull requests')
    .option('-t, --token [token]', 'Set Github token')
    .parse(process.argv);

if(program.token){
    storage.setItem('token', program.token).then(function(){
        console.log(colors.green('The token has been saved.'));
        process.exit(0);
    });
} else if (program.user && program.repository) {
    var github = new Github({
        version: '3.0.0'
    });

    if(!storage.getItem('token')){
        console.log(colors.red('Please set the Github token before.'));
        process.exit(1);
    }

    github.authenticate({
        type: 'token',
        token: storage.getItem('token') || ''
    });

    var table = new Table({ 
        chars: {'mid': '', 'left-mid': '', 'mid-mid': '', 'right-mid': ''} ,
        head: ['ID', 'Title', 'Assignee', 'Link', 'Comments']
    });

    github.pullRequests.getAll({
        user: program.user,
        repo: program.repository
    }, function(error, repository){
        if(!error){
            async.each(repository, function(item, done){
                github.pullRequests.getComments({
                    user: program.user,
                    repo: program.repository,
                    number: item.number
                }, function(err, comments){
                    if(!err){
                        table.push([
                            item.number,
                            item.title,
                            (item.assignee ? item.assignee.login : ''),
                            item._links.html.href,
                            comments.length
                        ]);
                        done();
                    }
                });
            }, function(err){
                if(!err){
                    console.log(table.toString());
                } else {
                    process.exit(1);
                }
            });
        } else {
            console.log(colors.red('The repository doesn\'t exits.'));
            process.exit(1);
        }
    });
} else {
    program.help();
}