const knex = require('./../database/index');

async function readAll(){
    try{
        const eventos = await knex('events')
                        .select('nome',
                                'local',
                                'endereco',
                                'data',
                                'horario',
                                'imagem',
                                'descricaoEvento');
        return {eventos};
    }catch(error){
        return {
            status: false,
            message: error.message,
        };
    }              
}
async function readEvent(id){
    try{
        const event = await knex('events')
                            .select('nome',
                            'local',
                            'endereco',
                            'data',
                            'horario',
                            'imagem',
                            'descricaoEvento')
                            .where({user_id : id});
        if(!event){
            throw new Error("Evento não existe");
        }
        return event;
    }catch(error){
        return{
            status: false,
            message: error.message
        };
    }
}
async function createEvent(nome, local, endereco, data, horario, imagem, descricaoEvento, user_id){
    try{
        const validName = await knex('events')
                                .select('*')
                                .where({nome : nome});
        if(validName) throw new Error("Evento com esse nome ja cadastrado.");
        const newEvent = {
            nome: nome,
            local: local,
            endereco: endereco,
            data: data,
            horario: horario,
            imagem: imagem,
            descricao: descricaoEvento,
            user_id: user_id
        };
        await knex('events').insert(newEvent);

        return {
            status: true,
            message: "Usuario Cadastrado com Sucesso"
        };

    }catch(error){
        return {
            status: false,
            message: error.message,
        };
    };
}










module.exports = {
    readAll,
    readEvent,
    createEvent,
    // updateEvent,
    // deleteEvent
}