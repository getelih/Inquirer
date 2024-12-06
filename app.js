const inquirer = require('inquirer');

async function main() {
    const prompt = inquirer.createPromptModule();

    try {
        const answers = await prompt([
            {
                type: 'input',
                name: 'username',
                message: 'Mis su nimi on?',
            },
            {
                type: 'password',
                name: 'password',
                message: 'Sisesta oma parool:',
                mask: '*',
            },
            {
                type: 'confirm',
                name: 'isAdult',
                message: 'Kas sa oled täisealine?',
            },
            {
                type: 'list',
                name: 'favoriteColor',
                message: 'Vali oma lemmikvärv:',
                choices: ['Punane', 'Sinine', 'Roheline', 'Kollane'],
            },
            {
                type: 'rawlist',
                name: 'food',
                message: 'Vali lõunasöök:',
                choices: ['Kanafilee', 'Frikadellisupp', 'Praetud lõhe', 'Burger'],
            },
            {
                type: 'checkbox',
                name: 'hobbies',
                message: 'Vali oma hobid:',
                choices: ['Muusika', 'Sport', 'Lugemine', 'Maalimine'],
            },
            {
                type: 'number',
                name: 'age',
                message: 'Kui vana sa oled?',
                validate: (value) => {
                    if (value < 0) return 'Vanus ei saa olla negatiivne!';
                    return true;
                },
            },

            {
                type: 'expand',
                name: 'confirmChoice',
                message: 'Kas sulle meeldisid need küsimused?',
                choices: [
                    { key: 'y', name: 'Jah', value: 'yes' },
                    { key: 'N', name: 'Ei', value: 'no' },
                    { key: 'M', name: 'Võib-olla', value: 'maybe' },
                ],
            },
        ]);

        console.log('\nSinu vastused:');
        console.log(answers);
    } catch (error) {
        console.error('Midagi läks valesti:', error);
    }
}

main();
