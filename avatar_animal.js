function avatarSVG(roleId,size){size=size||52;var s=size,w=s,h=s;
  var cx=w/2,cy=h*0.48,fr=h*0.42;
  function bgCircle(clr){return '<circle cx="'+cx+'" cy="'+cx+'" r="'+cx+'" fill="'+clr+'"/>';}
  function cuteEyes(ex,ey,er,clr){
    var pr=er*0.38, hr=pr*0.45;
    return '<circle cx="'+(cx-ex)+'" cy="'+ey+'" r="'+er+'" fill="'+clr+'"/>'+
      '<circle cx="'+(cx-ex)+'" cy="'+ey+'" r="'+pr+'" fill="#1a1a1a"/>'+
      '<circle cx="'+(cx-ex-er*0.18)+'" cy="'+(ey-er*0.28)+'" r="'+hr+'" fill="white"/>'+
      '<circle cx="'+(cx+ex)+'" cy="'+ey+'" r="'+er+'" fill="'+clr+'"/>'+
      '<circle cx="'+(cx+ex)+'" cy="'+ey+'" r="'+pr+'" fill="#1a1a1a"/>'+
      '<circle cx="'+(cx+ex-er*0.18)+'" cy="'+(ey-er*0.28)+'" r="'+hr+'" fill="white"/>';
  }
  function blush(x,y,r2){return '<circle cx="'+x+'" cy="'+y+'" r="'+r2+'" fill="#f0a0a0" opacity="0.22"/>';}
  function roundGlasses(ex,ey,er,clr,sw){
    return '<circle cx="'+(cx-ex)+'" cy="'+ey+'" r="'+(er*2)+'" fill="none" stroke="'+clr+'" stroke-width="'+sw+'"/>'+
      '<circle cx="'+(cx+ex)+'" cy="'+ey+'" r="'+(er*2)+'" fill="none" stroke="'+clr+'" stroke-width="'+sw+'"/>'+
      '<line x1="'+(cx-ex+er*2)+'" y1="'+ey+'" x2="'+(cx+ex-er*2)+'" y2="'+ey+'" stroke="'+clr+'" stroke-width="'+(sw*0.75)+'"/>';
  }
  function rectGlasses(ex,ey,er,clr,sw){
    var gw=er*3.2, gh=er*2.2;
    return '<rect x="'+(cx-ex-gw/2)+'" y="'+(ey-gh/2)+'" width="'+gw+'" height="'+gh+'" rx="'+(er*0.6)+'" fill="none" stroke="'+clr+'" stroke-width="'+sw+'"/>'+
      '<rect x="'+(cx+ex-gw/2)+'" y="'+(ey-gh/2)+'" width="'+gw+'" height="'+gh+'" rx="'+(er*0.6)+'" fill="none" stroke="'+clr+'" stroke-width="'+sw+'"/>'+
      '<line x1="'+(cx-ex+gw/2)+'" y1="'+ey+'" x2="'+(cx+ex-gw/2)+'" y2="'+ey+'" stroke="'+clr+'" stroke-width="'+(sw*0.7)+'"/>';
  }
  function wrap(svgInner){return '<svg viewBox="0 0 '+w+' '+h+'" width="'+w+'" height="'+h+'">'+svgInner+'</svg>';}
  var avatars={};

  // Koala - Shenyuan
  avatars.psychoanalytic=wrap(
    bgCircle('#E8E2D8')+
    '<ellipse cx="'+(cx-fr*0.82)+'" cy="'+(cy-fr*0.35)+'" rx="'+(fr*0.38)+'" ry="'+(fr*0.5)+'" fill="#C8BFB5"/>'+
    '<ellipse cx="'+(cx-fr*0.82)+'" cy="'+(cy-fr*0.35)+'" rx="'+(fr*0.2)+'" ry="'+(fr*0.3)+'" fill="#F0E8DD"/>'+
    '<ellipse cx="'+(cx+fr*0.82)+'" cy="'+(cy-fr*0.35)+'" rx="'+(fr*0.38)+'" ry="'+(fr*0.5)+'" fill="#C8BFB5"/>'+
    '<ellipse cx="'+(cx+fr*0.82)+'" cy="'+(cy-fr*0.35)+'" rx="'+(fr*0.2)+'" ry="'+(fr*0.3)+'" fill="#F0E8DD"/>'+
    '<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+(fr*1.05)+'" ry="'+(fr*0.9)+'" fill="#D0C8BB"/>'+
    '<ellipse cx="'+cx+'" cy="'+(cy+fr*0.08)+'" rx="'+(fr*0.18)+'" ry="'+(fr*0.13)+'" fill="#3A3028"/>'+
    '<ellipse cx="'+cx+'" cy="'+(cy+fr*0.05)+'" rx="'+(fr*0.06)+'" ry="'+(fr*0.04)+'" fill="#5A5048" opacity="0.4"/>'+
    cuteEyes(fr*0.35,cy-fr*0.18,fr*0.1,'#2A2018')+
    blush(cx-fr*0.55,cy+fr*0.05,fr*0.12)+blush(cx+fr*0.55,cy+fr*0.05,fr*0.12)+
    '<path d="M'+(cx-fr*0.2)+','+(cy+fr*0.3)+' Q'+cx+','+(cy+fr*0.48)+' '+(cx+fr*0.2)+','+(cy+fr*0.3)+'" fill="none" stroke="#8A7060" stroke-width="'+(h*0.025)+'" stroke-linecap="round"/>'+
    roundGlasses(fr*0.35,cy-fr*0.18,fr*0.1,'#C9A050',h*0.025)
  );

  // Red Fox - Mingsi
  avatars.cbt=wrap(
    bgCircle('#E2E8F0')+
    '<polygon points="'+(cx-fr*0.65)+','+(cy-fr*0.7)+' '+(cx-fr*1.05)+','+(cy-fr*1.25)+' '+(cx-fr*0.38)+','+(cy-fr*0.85)+'" fill="#E87830"/>'+
    '<polygon points="'+(cx-fr*0.62)+','+(cy-fr*0.75)+' '+(cx-fr*0.92)+','+(cy-fr*1.1)+' '+(cx-fr*0.45)+','+(cy-fr*0.85)+'" fill="#F5E8D8"/>'+
    '<polygon points="'+(cx+fr*0.65)+','+(cy-fr*0.7)+' '+(cx+fr*1.05)+','+(cy-fr*1.25)+' '+(cx+fr*0.38)+','+(cy-fr*0.85)+'" fill="#E87830"/>'+
    '<polygon points="'+(cx+fr*0.62)+','+(cy-fr*0.75)+' '+(cx+fr*0.92)+','+(cy-fr*1.1)+' '+(cx+fr*0.45)+','+(cy-fr*0.85)+'" fill="#F5E8D8"/>'+
    '<ellipse cx="'+cx+'" cy="'+(cy+fr*0.05)+'" rx="'+(fr*0.85)+'" ry="'+(fr*0.85)+'" fill="#E87830"/>'+
    '<ellipse cx="'+cx+'" cy="'+(cy+fr*0.38)+'" rx="'+(fr*0.45)+'" ry="'+(fr*0.4)+'" fill="#FDF5EB"/>'+
    cuteEyes(fr*0.3,cy-fr*0.05,fr*0.09,'#2A1A0A')+
    '<ellipse cx="'+cx+'" cy="'+(cy+fr*0.18)+'" rx="'+(fr*0.06)+'" ry="'+(fr*0.04)+'" fill="#1A1A1A"/>'+
    '<path d="M'+(cx-fr*0.12)+','+(cy+fr*0.3)+' Q'+cx+','+(cy+fr*0.42)+' '+(cx+fr*0.12)+','+(cy+fr*0.3)+'" fill="none" stroke="#5A3A2A" stroke-width="'+(h*0.022)+'" stroke-linecap="round"/>'+
    rectGlasses(fr*0.3,cy-fr*0.05,fr*0.09,'#5A6A7A',h*0.02)
  );

  // Red Panda - Xinran
  avatars.humanistic=wrap(
    bgCircle('#E8F0E4')+
    '<ellipse cx="'+(cx-fr*0.72)+'" cy="'+(cy-fr*0.5)+'" rx="'+(fr*0.22)+'" ry="'+(fr*0.28)+'" fill="#8B4513"/>'+
    '<ellipse cx="'+(cx-fr*0.72)+'" cy="'+(cy-fr*0.5)+'" rx="'+(fr*0.12)+'" ry="'+(fr*0.16)+'" fill="#F5E8D8"/>'+
    '<ellipse cx="'+(cx+fr*0.72)+'" cy="'+(cy-fr*0.5)+'" rx="'+(fr*0.22)+'" ry="'+(fr*0.28)+'" fill="#8B4513"/>'+
    '<ellipse cx="'+(cx+fr*0.72)+'" cy="'+(cy-fr*0.5)+'" rx="'+(fr*0.12)+'" ry="'+(fr*0.16)+'" fill="#F5E8D8"/>'+
    '<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+(fr*0.95)+'" ry="'+(fr*0.88)+'" fill="#C4511A"/>'+
    '<ellipse cx="'+cx+'" cy="'+(cy+fr*0.05)+'" rx="'+(fr*0.55)+'" ry="'+(fr*0.52)+'" fill="#FDF5EB"/>'+
    '<ellipse cx="'+(cx-fr*0.3)+'" cy="'+(cy-fr*0.08)+'" rx="'+(fr*0.2)+'" ry="'+(fr*0.18)+'" fill="#8B2808"/>'+
    '<ellipse cx="'+(cx+fr*0.3)+'" cy="'+(cy-fr*0.08)+'" rx="'+(fr*0.2)+'" ry="'+(fr*0.18)+'" fill="#8B2808"/>'+
    '<circle cx="'+(cx-fr*0.3)+'" cy="'+(cy-fr*0.08)+'" r="'+(fr*0.08)+'" fill="#FFF"/>'+
    '<circle cx="'+(cx-fr*0.3)+'" cy="'+(cy-fr*0.08)+'" r="'+(fr*0.035)+'" fill="#1A0A00"/>'+
    '<circle cx="'+(cx-fr*0.3-fr*0.015)+'" cy="'+(cy-fr*0.08-fr*0.02)+'" r="'+(fr*0.015)+'" fill="white"/>'+
    '<circle cx="'+(cx+fr*0.3)+'" cy="'+(cy-fr*0.08)+'" r="'+(fr*0.08)+'" fill="#FFF"/>'+
    '<circle cx="'+(cx+fr*0.3)+'" cy="'+(cy-fr*0.08)+'" r="'+(fr*0.035)+'" fill="#1A0A00"/>'+
    '<circle cx="'+(cx+fr*0.3-fr*0.015)+'" cy="'+(cy-fr*0.08-fr*0.02)+'" r="'+(fr*0.015)+'" fill="white"/>'+
    '<ellipse cx="'+cx+'" cy="'+(cy+fr*0.12)+'" rx="'+(fr*0.06)+'" ry="'+(fr*0.04)+'" fill="#3A1A0A"/>'+
    blush(cx-fr*0.42,cy+fr*0.12,fr*0.1)+blush(cx+fr*0.42,cy+fr*0.12,fr*0.1)+
    '<path d="M'+(cx-fr*0.15)+','+(cy+fr*0.24)+' Q'+cx+','+(cy+fr*0.38)+' '+(cx+fr*0.15)+','+(cy+fr*0.24)+'" fill="none" stroke="#6A3A2A" stroke-width="'+(h*0.025)+'" stroke-linecap="round"/>'+
    (s>36?'<path d="M'+(cx-fr*0.85)+','+(cy-fr*0.6)+' Q'+(cx-fr*0.65)+','+(cy-fr*0.85)+' '+(cx-fr*0.5)+','+(cy-fr*0.6)+'" fill="#6AAA50" opacity="0.55"/><circle cx="'+(cx-fr*0.58)+'" cy="'+(cy-fr*0.7)+'" r="'+(fr*0.06)+'" fill="#7AC060" opacity="0.45"/>':'')
  );

  // Elephant - Cunguang
  avatars.existential=wrap(
    bgCircle('#EADDD4')+
    '<ellipse cx="'+(cx-fr*1.05)+'" cy="'+(cy-fr*0.05)+'" rx="'+(fr*0.5)+'" ry="'+(fr*0.65)+'" fill="#B8A898"/>'+
    '<ellipse cx="'+(cx-fr*1.05)+'" cy="'+(cy-fr*0.05)+'" rx="'+(fr*0.28)+'" ry="'+(fr*0.4)+'" fill="#E0D2C2" opacity="0.5"/>'+
    '<ellipse cx="'+(cx+fr*1.05)+'" cy="'+(cy-fr*0.05)+'" rx="'+(fr*0.5)+'" ry="'+(fr*0.65)+'" fill="#B8A898"/>'+
    '<ellipse cx="'+(cx+fr*1.05)+'" cy="'+(cy-fr*0.05)+'" rx="'+(fr*0.28)+'" ry="'+(fr*0.4)+'" fill="#E0D2C2" opacity="0.5"/>'+
    '<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+(fr*0.9)+'" ry="'+(fr*0.82)+'" fill="#D0C0B0"/>'+
    '<path d="M'+cx+','+(cy+fr*0.45)+' Q'+cx+','+(cy+fr*0.95)+' '+(cx+fr*0.1)+','+(cy+fr*0.9)+'" fill="none" stroke="#C0B0A0" stroke-width="'+(fr*0.28)+'" stroke-linecap="round"/>'+
    '<path d="M'+cx+','+(cy+fr*0.45)+' Q'+cx+','+(cy+fr*0.95)+' '+(cx+fr*0.1)+','+(cy+fr*0.9)+'" fill="none" stroke="#D0C0B0" stroke-width="'+(fr*0.18)+'" stroke-linecap="round"/>'+
    cuteEyes(fr*0.35,cy-fr*0.15,fr*0.08,'#2A1A0A')+
    '<path d="M'+(cx-fr*0.2)+','+(cy+fr*0.35)+' Q'+(cx-fr*0.15)+','+(cy+fr*0.55)+' '+(cx-fr*0.05)+','+(cy+fr*0.5)+'" fill="none" stroke="#F5F0E8" stroke-width="'+(fr*0.08)+'" stroke-linecap="round"/>'+
    '<path d="M'+(cx+fr*0.2)+','+(cy+fr*0.35)+' Q'+(cx+fr*0.15)+','+(cy+fr*0.55)+' '+(cx+fr*0.05)+','+(cy+fr*0.5)+'" fill="none" stroke="#F5F0E8" stroke-width="'+(fr*0.08)+'" stroke-linecap="round"/>'+
    '<path d="M'+(cx-fr*0.18)+','+(cy+fr*0.32)+' Q'+cx+','+(cy+fr*0.44)+' '+(cx+fr*0.18)+','+(cy+fr*0.32)+'" fill="none" stroke="#8A7060" stroke-width="'+(h*0.022)+'" stroke-linecap="round"/>'
  );

  // Owl - Guanlan
  avatars.historian=wrap(
    bgCircle('#F2EAD8')+
    '<polygon points="'+(cx-fr*0.55)+','+(cy-fr*0.6)+' '+(cx-fr*0.75)+','+(cy-fr*1.0)+' '+(cx-fr*0.35)+','+(cy-fr*0.7)+'" fill="#A08868"/>'+
    '<polygon points="'+(cx+fr*0.55)+','+(cy-fr*0.6)+' '+(cx+fr*0.75)+','+(cy-fr*1.0)+' '+(cx+fr*0.35)+','+(cy-fr*0.7)+'" fill="#A08868"/>'+
    '<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+(fr*0.85)+'" ry="'+(fr*0.82)+'" fill="#C8B898"/>'+
    '<ellipse cx="'+cx+'" cy="'+(cy+fr*0.15)+'" rx="'+(fr*0.55)+'" ry="'+(fr*0.45)+'" fill="#F5EDDF"/>'+
    '<circle cx="'+(cx-fr*0.32)+'" cy="'+(cy-fr*0.08)+'" r="'+(fr*0.3)+'" fill="#F5EDDF"/>'+
    '<circle cx="'+(cx+fr*0.32)+'" cy="'+(cy-fr*0.08)+'" r="'+(fr*0.3)+'" fill="#F5EDDF"/>'+
    '<circle cx="'+(cx-fr*0.32)+'" cy="'+(cy-fr*0.08)+'" r="'+(fr*0.16)+'" fill="#F0C040"/>'+
    '<circle cx="'+(cx-fr*0.32)+'" cy="'+(cy-fr*0.08)+'" r="'+(fr*0.07)+'" fill="#1A0A00"/>'+
    '<circle cx="'+(cx-fr*0.32-fr*0.02)+'" cy="'+(cy-fr*0.08-fr*0.04)+'" r="'+(fr*0.025)+'" fill="white"/>'+
    '<circle cx="'+(cx+fr*0.32)+'" cy="'+(cy-fr*0.08)+'" r="'+(fr*0.16)+'" fill="#F0C040"/>'+
    '<circle cx="'+(cx+fr*0.32)+'" cy="'+(cy-fr*0.08)+'" r="'+(fr*0.07)+'" fill="#1A0A00"/>'+
    '<circle cx="'+(cx+fr*0.32-fr*0.02)+'" cy="'+(cy-fr*0.08-fr*0.04)+'" r="'+(fr*0.025)+'" fill="white"/>'+
    '<polygon points="'+cx+','+(cy+fr*0.05)+' '+(cx-fr*0.06)+','+(cy+fr*0.15)+' '+(cx+fr*0.06)+','+(cy+fr*0.15)+'" fill="#E8A020"/>'+
    '<path d="M'+(cx-fr*0.12)+','+(cy+fr*0.25)+' Q'+cx+','+(cy+fr*0.35)+' '+(cx+fr*0.12)+','+(cy+fr*0.25)+'" fill="none" stroke="#8A7060" stroke-width="'+(h*0.02)+'" stroke-linecap="round"/>'+
    '<path d="M'+(cx-fr*0.4)+','+(cy-fr*0.05)+' Q'+cx+','+(cy+fr*0.2)+' '+(cx+fr*0.4)+','+(cy-fr*0.05)+'" fill="none" stroke="#8A6040" stroke-width="'+(h*0.02)+'"/>'+
    '<line x1="'+(cx-fr*0.22)+'" y1="'+(cy-fr*0.02)+'" x2="'+(cx+fr*0.22)+'" y2="'+(cy-fr*0.02)+'" stroke="#8A6040" stroke-width="'+(h*0.015)+'"/>'+
    (s>36?'<ellipse cx="'+(cx+fr*0.82)+'" cy="'+(cy-fr*0.55)+'" rx="'+(fr*0.1)+'" ry="'+(fr*0.07)+'" fill="#F0C860" opacity="0.5"/><circle cx="'+(cx+fr*0.9)+'" cy="'+(cy-fr*0.58)+'" r="'+(fr*0.04)+'" fill="#F0C860" opacity="0.5"/><polygon points="'+(cx+fr*0.94)+','+(cy-fr*0.59)+' '+(cx+fr*0.98)+','+(cy-fr*0.57)+' '+(cx+fr*0.94)+','+(cy-fr*0.55)+'" fill="#E89830" opacity="0.4"/>':'')
  );

  // Deer - Zhixing
  avatars.economist=wrap(
    bgCircle('#E4E6EA')+
    '<path d="M'+(cx-fr*0.35)+','+(cy-fr*0.75)+' L'+(cx-fr*0.5)+','+(cy-fr*1.15)+'" stroke="#8B6914" stroke-width="'+(fr*0.08)+'" stroke-linecap="round"/>'+
    '<path d="M'+(cx-fr*0.45)+','+(cy-fr*0.98)+' L'+(cx-fr*0.65)+','+(cy-fr*1.15)+'" stroke="#8B6914" stroke-width="'+(fr*0.06)+'" stroke-linecap="round"/>'+
    '<path d="M'+(cx-fr*0.4)+','+(cy-fr*0.88)+' L'+(cx-fr*0.22)+','+(cy-fr*1.05)+'" stroke="#8B6914" stroke-width="'+(fr*0.05)+'" stroke-linecap="round"/>'+
    '<path d="M'+(cx+fr*0.35)+','+(cy-fr*0.75)+' L'+(cx+fr*0.5)+','+(cy-fr*1.15)+'" stroke="#8B6914" stroke-width="'+(fr*0.08)+'" stroke-linecap="round"/>'+
    '<path d="M'+(cx+fr*0.45)+','+(cy-fr*0.98)+' L'+(cx+fr*0.65)+','+(cy-fr*1.15)+'" stroke="#8B6914" stroke-width="'+(fr*0.06)+'" stroke-linecap="round"/>'+
    '<path d="M'+(cx+fr*0.4)+','+(cy-fr*0.88)+' L'+(cx+fr*0.22)+','+(cy-fr*1.05)+'" stroke="#8B6914" stroke-width="'+(fr*0.05)+'" stroke-linecap="round"/>'+
    '<ellipse cx="'+(cx-fr*0.55)+'" cy="'+(cy-fr*0.55)+'" rx="'+(fr*0.12)+'" ry="'+(fr*0.25)+'" fill="#C89550" transform="rotate(-25,'+(cx-fr*0.55)+','+(cy-fr*0.55)+')"/>'+
    '<ellipse cx="'+(cx-fr*0.55)+'" cy="'+(cy-fr*0.55)+'" rx="'+(fr*0.06)+'" ry="'+(fr*0.15)+'" fill="#F0D8B0" transform="rotate(-25,'+(cx-fr*0.55)+','+(cy-fr*0.55)+')"/>'+
    '<ellipse cx="'+(cx+fr*0.55)+'" cy="'+(cy-fr*0.55)+'" rx="'+(fr*0.12)+'" ry="'+(fr*0.25)+'" fill="#C89550" transform="rotate(25,'+(cx+fr*0.55)+','+(cy-fr*0.55)+')"/>'+
    '<ellipse cx="'+(cx+fr*0.55)+'" cy="'+(cy-fr*0.55)+'" rx="'+(fr*0.06)+'" ry="'+(fr*0.15)+'" fill="#F0D8B0" transform="rotate(25,'+(cx+fr*0.55)+','+(cy-fr*0.55)+')"/>'+
    '<ellipse cx="'+cx+'" cy="'+(cy+fr*0.05)+'" rx="'+(fr*0.55)+'" ry="'+(fr*0.75)+'" fill="#D4A860"/>'+
    '<ellipse cx="'+cx+'" cy="'+(cy+fr*0.4)+'" rx="'+(fr*0.35)+'" ry="'+(fr*0.3)+'" fill="#F5E8D5"/>'+
    cuteEyes(fr*0.22,cy-fr*0.12,fr*0.08,'#2A1A0A')+
    '<ellipse cx="'+cx+'" cy="'+(cy+fr*0.22)+'" rx="'+(fr*0.07)+'" ry="'+(fr*0.05)+'" fill="#1A1A1A"/>'+
    '<path d="M'+(cx-fr*0.12)+','+(cy+fr*0.32)+' Q'+cx+','+(cy+fr*0.42)+' '+(cx+fr*0.12)+','+(cy+fr*0.32)+'" fill="none" stroke="#6A5030" stroke-width="'+(h*0.02)+'" stroke-linecap="round"/>'+
    rectGlasses(fr*0.22,cy-fr*0.12,fr*0.08,'#445',h*0.018)+
    (s>36?'<polyline points="'+(cx+fr*0.6)+','+(cy+fr*0.55)+' '+(cx+fr*0.68)+','+(cy+fr*0.4)+' '+(cx+fr*0.76)+','+(cy+fr*0.45)+' '+(cx+fr*0.84)+','+(cy+fr*0.28)+'" fill="none" stroke="#3A5A8A" stroke-width="'+(h*0.016)+'" stroke-linecap="round" stroke-linejoin="round" opacity="0.4"/>':'')
  );

  return avatars[roleId]||avatars.psychoanalytic;
}