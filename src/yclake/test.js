(async () => {
    let UserInfo = require('./dao/db').UserInfo;

    var result = await UserInfo.find();

    console.log(result);

    await UserInfo.add({
        params: [['test2', 'test2', '0'], ['test1', 'test1', '0']]
    });

    await UserInfo.add({
        params: [['test3', 'test3', '0']]
    });

    result = await UserInfo.find();
    console.log(result);

    await UserInfo.update({
        update: "set name=?",
        filter: " name=?",
        params: ['test3', 'test2']
    });

    result = await UserInfo.find();
    console.log(result);

    await UserInfo.delete({
        filter: "name like 'test%'"
    });

    result = await UserInfo.find();
    console.log(result);
});

(() => {
    const { Random } = require('./util/random');
    var result = Random.serialId({
        prefix: '19',
        length: 10,
        start: 0,
        count: 10000
    });
    console.log(result);

    let count = 0;
    let data = [];
    while (count < 10) {
        data.push(Random.randomCode({ length: 10 }));
        count++;
        //console.log(count);
    }

    console.log(data);
});

(()=>{
    let _readCount = () => {
        return require('./dao/count.json').start;
    };

    let _saveCount = (start) =>{
        let count = require('./dao/count.json');
        count.start = start;
        const fs = require('fs');
        const path = require('path');
        fs.writeFileSync(path.join(__dirname, 'count.js'), JSON.stringify(count));
    }

    console.log(_readCount());
    _saveCount(100);
    console.log(_readCount());
    _saveCount(0);

    console.log(_readCount());
})();