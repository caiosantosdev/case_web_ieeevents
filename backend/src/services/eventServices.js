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
                                'descricao');
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
                            'descricao')
                            .where({id_evento : id});
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
async function readEventbyUser(id){
    try{
        const event = await knex('events')
                            .select('nome',
                            'local',
                            'endereco',
                            'data',
                            'horario',
                            'imagem',
                            'descricao')
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
async function createEvent(newEvent){
    try{
        const validName = await knex('events')
                                .select('*')
                                .where({nome : nome})
                                .first()
        if(validName) throw new Error("Evento com esse nome ja cadastrado.");
        
        await knex('events').insert(newEvent);

        return {
            status: true,
            message: "Evento Cadastrado com Sucesso"
        };

    }catch(error){
        return {
            status: false,
            message: error.message,
        };
    };
}
async function updateEvent(updEvent, id){
    try{

        await knex('events')
            .update( updEvent )
            .where({ id_evento: id })
        
        return {
            status: true,
            message: "Evento Atualizado com Sucesso"
        };
    }catch(error){
        return {
            status: false,
            message: error.message,
        };
    };
}
async function deleteEvent(id){
    try{
        const user = await knex('events').select('*')
                                            .where({ id_evento: id })
                                            .first()
        if(!user)throw new Error("ERRO: Evento Nao Existe.");
        
        await knex('events')
                .where({ id_evento: id })
                .delete()    
        return {
            status: true,
            message: "Evento Deletado com Sucesso"
        };
    }catch(error){
        return {
            status: false,
            message: error.message,
        };
    }
}




module.exports = {
    readAll,
    readEvent,
    readEventbyUser,
    createEvent,
    updateEvent,
    deleteEvent
}