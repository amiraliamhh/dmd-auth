import mongoose from 'mongoose';

const WidgetSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true
  },
  dashboard: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  widget_type: {
    type: String,
    required: true,
    enum: [
      'alexa_watcher'
    ]
  },
  widget_data: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  interval: {
    type: String,
    required: true,
    enum: [
      'everyday',
      'everyhour'
    ]
  }
})

export default mongoose.model('widgets', WidgetSchema);
