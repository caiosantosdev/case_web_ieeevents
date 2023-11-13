const { readAlladm, readAll, readEvent, readEventbyUser, createEvent, updateEvent, deleteEvent} = require('./../services/eventServices');

module.exports = {
    async indexadmController(req, res){
        try{
            const events = await readAlladm();
            res.json(events);
        }catch(error){
            res.json({message:error.message});
        }
    },
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
    async readbyUserController(req, res){
        try{
            const event = await readEventbyUser(req.params.id)
            
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
                descricao,
                user_id
            } = req.body;
            event.user_id = req.params.id
            //console.log("passou do create");
            // console.log(event);
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
                descricao
            } = req.body;
            
            const updated = await updateEvent( updEvent , req.params.id );
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