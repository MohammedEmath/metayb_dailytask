let cricketteam=(function(){
    let team=[];
    return {
        addplayer(ele){
           team.push(ele);
           console.log(team);
    },
    remplayer(ele){
        team.pop(ele);
        console.log(team);
    },
    updateplayer(oldname,newname){
        for(let i =0;i<team.length;i++){
            if(team[i]===oldname){
                team[i]=newname;
                console.log("player updated");
                console.log(team);
                return
            }
                
            }
            console.log("player not found");
        },
    
    listall(){
        console.log(team);
    }

    };
})();
cricketteam.addplayer("dhoni");
cricketteam.addplayer("kholi");
cricketteam.updateplayer("kholi","rohit");
cricketteam.listall();
cricketteam.remplayer("rohit");
cricketteam.listall();