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
            const evento = {
                nome,
                local,
                endereco,
                data,
                horario,
                imagem,
                descricaoEvento,
                id_user: req.params.id
            } = req.body;
            //console.log("passou do create");
            console.log(evento);
            const eventoResponse = await createEvent(evento);
            return res.json(eventoResponse);
        }catch(error){
            return res.json({message:error.message});
        }
    },
}