const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Tilemap,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.solid,
		C3.Plugins.Camera3D,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{КартаТайлов: 0},
	{КартаТайлов2: 0},
	{"8Направлений": 0},
	{Спрайт: 0},
	{Спрайт2: 0},
	{КартаТайлов3: 0},
	{Спрайт3: 0},
	{Спрайт4: 0},
	{Спрайт5: 0},
	{КартаТайлов4: 0},
	{Твёрдый: 0},
	{b2f8dd54949ab945267f1e197d9e6d: 0},
	{Спрайт6: 0},
	{rPU5WNMTRgok2Afl3RtXqwtEzkV2ZE5qjqpYA5hHY2hS8SIjacwNPP8kHzMhp3lgdxQd3cAL3w0RCXqPBfXPLKxa: 0},
	{uazhunterubilejnyj: 0},
	{ac5eddaa68b9a80b7851941a3fc4f: 0},
	{b7e54d02186af471aeebb8ed79e8f0c: 0},
	{"3DКамера": 0},
	{Спрайт7: 0},
	{Спрайт8: 0},
	{Спрайт9: 0},
	{i: 0},
	{youwinvideogamevector: 0},
	{КартаТайлов5: 0},
	{Спрайт10: 0},
	{КартаТайлов6: 0}
];

self.InstanceType = {
	КартаТайлов: class extends self.ITilemapInstance {},
	КартаТайлов2: class extends self.ITilemapInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	КартаТайлов3: class extends self.ITilemapInstance {},
	Спрайт3: class extends self.ISpriteInstance {},
	Спрайт4: class extends self.ISpriteInstance {},
	Спрайт5: class extends self.ISpriteInstance {},
	КартаТайлов4: class extends self.ITilemapInstance {},
	b2f8dd54949ab945267f1e197d9e6d: class extends self.ISpriteInstance {},
	Спрайт6: class extends self.ISpriteInstance {},
	rPU5WNMTRgok2Afl3RtXqwtEzkV2ZE5qjqpYA5hHY2hS8SIjacwNPP8kHzMhp3lgdxQd3cAL3w0RCXqPBfXPLKxa: class extends self.ISpriteInstance {},
	uazhunterubilejnyj: class extends self.ISpriteInstance {},
	ac5eddaa68b9a80b7851941a3fc4f: class extends self.ISpriteInstance {},
	b7e54d02186af471aeebb8ed79e8f0c: class extends self.ISpriteInstance {},
	_3DКамера: class extends self.IInstance {},
	Спрайт7: class extends self.ISpriteInstance {},
	Спрайт8: class extends self.ISpriteInstance {},
	Спрайт9: class extends self.ISpriteInstance {},
	i: class extends self.ISpriteInstance {},
	youwinvideogamevector: class extends self.ISpriteInstance {},
	КартаТайлов5: class extends self.ITilemapInstance {},
	Спрайт10: class extends self.ISpriteInstance {},
	КартаТайлов6: class extends self.ITilemapInstance {}
}