const EventBinders = require('./eventBinders');
const EventHandlers = require('./eventHandlers');
const SuitacaseSoundControl = require('./suitacaseSoundControl');

const eventBinders = new EventBinders;
const suitacaseSoundControl = new SuitacaseSoundControl;
const eventHandlers = new EventHandlers(eventBinders, suitacaseSoundControl);

