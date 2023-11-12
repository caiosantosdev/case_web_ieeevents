const { readAll, readEvent, createEvent, updateEvent, deleteEvent} = require('./../services/eventServices');

module.exports = {
    async indexController(req, res){
        try{
            const events = await readAll();
            res.json(events);
        }catch(error){
            res.json({message:error.message});
        }
    },
    async readOneController(req, res){
        try{
            const event = await readEvent(req.params.id)
            
            return res.json(event);
            
        }catch(error){
            res.json({message:error.message});
        }
    },
    async createController(req, res){
        try{
            const event = {
                nome,
                local,
                endereco,
                data,
                horario,
                imagem,
                descricaoEvento,
                user_id: req.params.id
            } = req.body;
            //console.log("passou do create");
            console.log(event);
            const eventResponse = await createEvent(event);
            return res.json(eventResponse);
        }catch(error){
            return res.json({message:error.message});
        }
    },
    async updateController(req, res){
        try{
            if(!req.params.id) throw new Error('Solicitacao invalida.');
            const updEvent = {
                nome,
                local,
                endereco,
                data,
                horario,
                imagem,
                descricaoEvento,
                id_user: req.params.id
            } = req.body;

            const { id } = req.params.id;
            
            const updated = await updateEvent( updEvent , id );
            return res.json(updated);
        }catch(error){
            return res.json({message:error.message});
        }
    },
    async deleteController(req, res){
        try{
            const deleted = await deleteEvent( req.params.id );
            return res.json(deleted);
        }catch(error){
            return res.json({message:error.message});
        }
    },
}