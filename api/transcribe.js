// Proxies AssemblyAI. {op:'create', audio_url} starts a job; {op:'status', id}
// polls it. The browser keeps the poll loop, so each call is short.
const guard = require('./_guard');
module.exports = async (req, res) => {
  if (!guard(req, res)) return;
  const key = process.env.ASSEMBLYAI_KEY;
  if (!key) return res.status(500).json({error:'ASSEMBLYAI_KEY env var not set'});
  const b = req.body || {};
  try {
    let r;
    if (b.op === 'create') {
      r = await fetch('https://api.assemblyai.com/v2/transcript', {method:'POST',
        headers:{Authorization:key,'Content-Type':'application/json'},
        body: JSON.stringify({audio_url: b.audio_url, language_detection:true})});
    } else if (b.op === 'status') {
      r = await fetch('https://api.assemblyai.com/v2/transcript/' + b.id, {headers:{Authorization:key}});
    } else return res.status(400).json({error:'bad op'});
    const text = await r.text();
    res.status(r.status).setHeader('content-type','application/json').send(text);
  } catch (e) { res.status(502).json({error:String(e)}); }
};
