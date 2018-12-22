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
  title: {
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
  layoutConfig: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  reportConfig: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
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
