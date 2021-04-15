var dd = {
    // a string or { width: number, height: number }
    pageSize: 'A4',

    // by default we use portrait, you can change it to landscape if you wish
    pageOrientation: 'landscape',

    // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
    pageMargins: [10,10,10,20],
    
    header: {
        
    },
    
	content: [
	    {
	        text: 'LOGO',
            alignment: 'left',
            margin: [0,0,0,0],
            fontSize: 15,
		    bold: true,  
	    },
	    
	    {
	        text: 'GROSAFETY GESTÃO DE RISCO OCUPACIONAL - CNPJ: 22.423.374/0001-54',
            alignment: 'right',
            margin: [0,0,0,0],
            fontSize: 10,
		    bold: true,  
	    },
	    
		{
		    text: 'UNIDADE - GROSAFETY MATRIZ', 
		    alignment:'right',
		    fontSize:10,
		    margin: [0,0,0,0],
		    bold: true,
		},
		
		{
		    text: 'INVENTÁRIO DE RISCOS', 
		    alignment:'right',
		    fontSize:10,
		    margin: [0,0,0,0],
		    bold: true,
		},

		{
			style: 'tableExample',
			margin:[0,5,0,0],
			table: {
			    headerRows: 1,
			    widths: ['*', 150, 150, 150],
				body: [
				    [{text: 'GRUPO DE COLABORADORES EXPOSTOS', style: 'tableHeader', color:'black',fillColor: '#fff', colSpan: 4, alignment: 'left'},{},{},{}],
					
					[
					    {text: 'GHE: 01 - Administração', style: 'tableHeader', alignement: 'left'},
					    {text: 'Sexo feminino: 50', style: 'tableHeader', alignement: 'left'},
					    {text: 'Sexo masculino: 25', style: 'tableHeader', alignement: 'left'},
					    {text: 'Total de colaboradores: 75', style: 'tableHeader', alignement: 'left'}
					],
				]
			},
			
			layout: 'headerLineOnly',
		},
		
		{
			style: 'tableExample',
			margin:[0,10,0,0],
			table: {
			    headerRows:1,
			    widths: [120,'*'],
				body: [
				    [{text: 'CARACTERIZAÇÃO DAS FUNÇÕES E ATIVIDADES', style: 'tableHeader', fillColor:'#fff', colSpan: 2, alignment: 'left'},{}],
					[
					    {text: 'Função', style: 'tableHeader', alignement: 'left'},
					    {text: 'Atividade', style: 'tableHeader', alignement: 'left'}
					],
					[
					    {text:'Auxiliar Administrativo',style:'subheader',alignment:'left'},
					    {text:'O Auxiliar Administrativo pode atuar em diversas áreas como: RH, comprar, estoque, financeiro, marketing. Esse profissional é muito procurado em escritório, mas também encontra espaço em RH, Logística, Hotéis, Shoppings, Salões de Beleza, entre outros.',style:'subheader',alignment:'justify'}
					],
				]
			},
			layout: 'headerLineOnly',
		},
		
		{
            columns: [
                {
                     // fixed width
                    style: 'tableExample',
			        margin:[0,10,0,0],
                    width: '50%',
                    table: {
                        headerRows: 1,
			            widths: '*',
			            body: [
			                [{text: 'CARACTERIZAÇÃO DO AMBIENTE', style: 'tableHeader', fillColor:'#fff', colSpan: 1, alignment: 'left'}],
				            [{text:'Estrutura em alvenaria e metálica, cobertura em telha em aço galvanizado, forro em pvc, piso com revestimento cerâmico, iluminação natural e artificial, ventilação natural e artificial, atividade externa realizada nos caminhões a iluminação e ventilação é artificial.',fontSize:10, bold:false, alignment:'justify'}],
			            ]
		            },
		            layout: 'headerLineOnly',
                },
                
                {
                    // % width
                    style: 'tableExample',
			        margin:[0,10,0,0],
                    width: '50%',
                    table: {
                        headerRows: 1,
			            widths: '*',
				        body: [
				            [{text: 'CARACTERIZAÇÃO DOS PROCESSOS', style: 'tableHeader', fillColor:'#fff', colSpan: 1, alignment: 'left'}],
					        [{text:'Estrutura em alvenaria e metálica, cobertura em telha em aço galvanizado, forro em pvc, piso com revestimento cerâmico, iluminação natural e artificial, ventilação natural e artificial, atividade externa realizada nos caminhões a iluminação e ventilação é artificial.',style:'subheader',alignment:'justify'}],
				        ]
			        },
			
			        layout: 'headerLineOnly',
                }
            ],
            // optional space between columns
            columnGap: 10
        },
		
		{
			style: 'tableExample',
			margin:[0,10,0,0],
			table: {
			    headerRows: 1,
			    widths: [85, 80, '*', 65, 65, 65, 65, 65],
				body: [
				    
				    [
				        {text: 'GRUPO: FÍSICO', style: 'subheader', fillColor:'#67ffa1',bold:true, alignement:'left', colSpan: 8},{},{},{},{},{},{},{},
				    ],
					    
					[   
					    [{text: 'Perigo', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Dano/Risco', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Fonte/Circustância', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Propagação', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Frequência', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Severidade', style:'tableHeader', alignment: 'left'}],
					    [{text: 'Probalidade', style:'tableHeader', alignment: 'left'}],
					    [{text: 'Nível de risco', style:'tableHeader', alignment: 'left'}],
					],
					[
					    {text:'Elvador Danificado', style:'subheader', fillColor:'#fff'},
					    {text:'Ruído(01.01.017)', style:'subheader', fillColor:'#fff'},
					    {text:'Elevação de veículos em elevador hidráulico', style:'subheader',fillColor:'#fff'},
					    {text:'Aéreo', style:'subheader',fillColor:'#fff'},
					    {text:'Eventual', fillColor:'#67ffa1',style:'subheader', fillColor:'#fff'},
					    {text:'2 - Tolerável', style:'subheader', fillColor:'#fff'},
					    {text:'4 - Provável', style:'subheader', fillColor:'#fff'},
					    {text:'8 - Médio', style:'subheader', fillColor:'#fff'},
				    ],
				],
			},
			layout: 'headerLineOnly',
			
		},
		{
            width: '100%',
            style: 'tableExample',
            margin:[0,10,0,0],
                table: {
                    widths:'100%',
    			    headerRows: 1,
    				body: [
    				    [{text: 'AÇÕES E ESTRATÉGIAS', style: 'tableHeader', fillColor:'#fff',color:'black', colSpan:1, bold:true, alignment: 'left',margin:[0,0,0,0]}],
    			        [{text: 'Nenhum controle adicional é necessário. A avaliação quantitativa poderá ser realizada apenas para confrmação do baixo nível e/ou concentração do agente; Manter o acompanhamento da execução das atividades e caso existam medidas de melhoria, incluir.', alignment: 'justify'}],
    			    ]
    		    },
		    layout: 'headerLineOnly'
    	},
		
		{
			style: 'tableExample',
			layout: 'headerLineOnly',
			margin:[0,10,0,0],
			table: {
			    headerRows: 1,
			    widths: [59, 103, 131, 100, 70, 175, '*'],	
				body: [
				    [{text: 'MEDIÇÕES QUANTITATIVAS', style:'tableHeader',fillColor:'#fff',color:'black', bold:true, colSpan: 7, alignment: 'left'},{},{},{},{},{},{}],
					[
					    {text:'Data', style:'subheader', alignment:'left'},
					    {text:'Tempo de exposição', style:'tableHeader', alignment:'left'},
					    {text:'Intensidade/Concentração', style:'tableHeader', alignment:'left'},
					    {text:'Limite de tolerância', style:'tableHeader', alignment:'left'},
					    {text:'Nível de ação', style:'tableHeader', alignment:'left'},
					    {text:'Und. de Medida da Intens/Concent', style:'tableHeader', alignment:'left'},
					    {text:'Técnica utilizada', style:'tableHeader', alignment:'left'}
					],
					[
					    {text:'12/02/2021', alignment:'left',style:'subheader'},
					    {text:'10 anos', alignment:'left',style:'subheader'},
					    {text:'Diária', alignment:'left',style:'subheader'},
					    {text:'Sem limite', alignment:'left',style:'subheader'},
					    {text:'Alto', alignment:'left',style:'subheader'},
					    {text:'Peridiocidade', alignment:'left',style:'subheader'},
					    {text:'Estatistica', alignment:'left',style:'subheader'}
					],
				]
			},
			
			
		},
		
		{
            columns:[
    		    {
    		        width: '100%',
			        style: 'tableExample',
			        margin:[0,10,0,0],
			        table: {
				    widths: [20,'*',170,'*',100,'*'],
				    headerRows: 1,
				    body: [
					    [{text: 'MEDIDAS DE CONTROLE E PROTEÇÃO', style: 'tableHeader',fillColor:'#fff',color:'black', bold:true, colSpan: 6, alignment: 'left',margin:[0,0,0,0]}, {},{},{},{},{}],
					    [
					        {text: 'EPI',style:'tableHeader', bold:true}, 
					        {text: 'Texto texto texto',style:'subheader', bold:false},
					        {text: 'Medidas de prevenção',style:'tableHeader', bold:true},
					        {text: 'Texto texto texto',style:'subheader', bold:false},
					        {text: 'Fundamentação legal',style:'tableHeader', bold:true},
					        {text: 'Texto texto texto',style:'subheader', bold:false},
					    ],
					    [
					        {text: 'EPC',style:'tableHeader', bold:true, margin:[0,40,0,0]}, 
					        {text: 'Texto texto texto',style:'subheader', bold:false, margin:[0,40,0,0]},
					        {text: 'Possíveis lesões ou agrávos à saúde',style:'tableHeader', bold:true, margin:[0,40,0,0]},
					        {text: 'Texto texto texto',style:'subheader', bold:false, margin:[0,40,0,0]},
					        {text: 'Observações',style:'tableHeader', bold:true,margin:[0,40,0,0]},
					        {text: 'Texto texto texto',style:'subheader', bold:false,margin:[0,40,0,0]},
					    ],
					    
				    ],
			    },
			 layout: 'headerLineOnly'
		},
    		
        		
            ], 
            columnGap: 10
        },	
	
	
	
	
	
	
	
	
	
	{
			style: 'tableExample',
			margin:[0,10,0,0],
			table: {
			    headerRows: 1,
			    widths: [85, 80, '*', 65, 65, 65, 65, 65],
				body: [
				    
				    [
				        {text: 'GRUPO: FÍSICO', style: 'subheader', fillColor:'#67ffa1',bold:true, alignement:'left', colSpan: 8},{},{},{},{},{},{},{},
				    ],
					    
					[   
					    [{text: 'Perigo', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Dano/Risco', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Fonte/Circustância', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Propagação', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Frequência', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Severidade', style:'tableHeader', alignment: 'left'}],
					    [{text: 'Probalidade', style:'tableHeader', alignment: 'left'}],
					    [{text: 'Nível de risco', style:'tableHeader', alignment: 'left'}],
					],
					[
					    {text:'Elvador Danificado', style:'subheader', fillColor:'#fff'},
					    {text:'Ruído(01.01.017)', style:'subheader', fillColor:'#fff'},
					    {text:'Elevação de veículos em elevador hidráulico', style:'subheader',fillColor:'#fff'},
					    {text:'Aéreo', style:'subheader',fillColor:'#fff'},
					    {text:'Eventual', fillColor:'#67ffa1',style:'subheader', fillColor:'#fff'},
					    {text:'2 - Tolerável', style:'subheader', fillColor:'#fff'},
					    {text:'4 - Provável', style:'subheader', fillColor:'#fff'},
					    {text:'8 - Médio', style:'subheader', fillColor:'#fff'},
				    ],
				],
			},
			layout: 'headerLineOnly',
			
		},
		{
            width: '100%',
            style: 'tableExample',
            margin:[0,10,0,0],
                table: {
                    widths:'100%',
    			    headerRows: 1,
    				body: [
    				    [{text: 'AÇÕES E ESTRATÉGIAS', style: 'tableHeader', fillColor:'#fff',color:'black', colSpan:1, bold:true, alignment: 'left',margin:[0,0,0,0]}],
    			        [{text: 'Nenhum controle adicional é necessário. A avaliação quantitativa poderá ser realizada apenas para confrmação do baixo nível e/ou concentração do agente; Manter o acompanhamento da execução das atividades e caso existam medidas de melhoria, incluir.', alignment: 'justify'}],
    			    ]
    		    },
		    layout: 'headerLineOnly'
    	},
		
		{
			style: 'tableExample',
			layout: 'headerLineOnly',
			margin:[0,10,0,0],
			table: {
			    headerRows: 1,
			    widths: [59, 103, 131, 100, 70, 175, '*'],	
				body: [
				    [{text: 'MEDIÇÕES QUANTITATIVAS', style:'tableHeader',fillColor:'#fff',color:'black', bold:true, colSpan: 7, alignment: 'left'},{},{},{},{},{},{}],
					[
					    {text:'Data', style:'subheader', alignment:'left'},
					    {text:'Tempo de exposição', style:'tableHeader', alignment:'left'},
					    {text:'Intensidade/Concentração', style:'tableHeader', alignment:'left'},
					    {text:'Limite de tolerância', style:'tableHeader', alignment:'left'},
					    {text:'Nível de ação', style:'tableHeader', alignment:'left'},
					    {text:'Und. de Medida da Intens/Concent', style:'tableHeader', alignment:'left'},
					    {text:'Técnica utilizada', style:'tableHeader', alignment:'left'}
					],
					[
					    {text:'12/02/2021', alignment:'left',style:'subheader'},
					    {text:'10 anos', alignment:'left',style:'subheader'},
					    {text:'Diária', alignment:'left',style:'subheader'},
					    {text:'Sem limite', alignment:'left',style:'subheader'},
					    {text:'Alto', alignment:'left',style:'subheader'},
					    {text:'Peridiocidade', alignment:'left',style:'subheader'},
					    {text:'Estatistica', alignment:'left',style:'subheader'}
					],
				]
			},
			
			
		},
		
		{
            columns:[
    		    {
    		        width: '100%',
			        style: 'tableExample',
			        margin:[0,10,0,0],
			        table: {
				    widths: [20,'*',170,'*',100,'*'],
				    headerRows: 1,
				    body: [
					    [{text: 'MEDIDAS DE CONTROLE E PROTEÇÃO', style: 'tableHeader',fillColor:'#fff',color:'black', bold:true, colSpan: 6, alignment: 'left',margin:[0,0,0,0]}, {},{},{},{},{}],
					    [
					        {text: 'EPI',style:'tableHeader', bold:true}, 
					        {text: 'Texto texto texto',style:'subheader', bold:false},
					        {text: 'Medidas de prevenção',style:'tableHeader', bold:true},
					        {text: 'Texto texto texto',style:'subheader', bold:false},
					        {text: 'Fundamentação legal',style:'tableHeader', bold:true},
					        {text: 'Texto texto texto',style:'subheader', bold:false},
					    ],
					    [
					        {text: 'EPC',style:'tableHeader', bold:true, margin:[0,40,0,0]}, 
					        {text: 'Texto texto texto',style:'subheader', bold:false, margin:[0,40,0,0]},
					        {text: 'Possíveis lesões ou agrávos à saúde',style:'tableHeader', bold:true, margin:[0,40,0,0]},
					        {text: 'Texto texto texto',style:'subheader', bold:false, margin:[0,40,0,0]},
					        {text: 'Observações',style:'tableHeader', bold:true,margin:[0,40,0,0]},
					        {text: 'Texto texto texto',style:'subheader', bold:false,margin:[0,40,0,0]},
					    ],
					    
				    ],
			    },
			 layout: 'headerLineOnly'
		},
    		
        		
            ], 
            columnGap: 10
        },	
	
	
	
	
	
	
	
	
	
	
	
	
	{
			style: 'tableExample',
			margin:[0,10,0,0],
			table: {
			    headerRows: 1,
			    widths: [85, 80, '*', 65, 65, 65, 65, 65],
				body: [
				    
				    [
				        {text: 'GRUPO: FÍSICO', style: 'subheader', fillColor:'#67ffa1',bold:true, alignement:'left', colSpan: 8},{},{},{},{},{},{},{},
				    ],
					    
					[   
					    [{text: 'Perigo', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Dano/Risco', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Fonte/Circustância', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Propagação', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Frequência', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Severidade', style:'tableHeader', alignment: 'left'}],
					    [{text: 'Probalidade', style:'tableHeader', alignment: 'left'}],
					    [{text: 'Nível de risco', style:'tableHeader', alignment: 'left'}],
					],
					[
					    {text:'Elvador Danificado', style:'subheader', fillColor:'#fff'},
					    {text:'Ruído(01.01.017)', style:'subheader', fillColor:'#fff'},
					    {text:'Elevação de veículos em elevador hidráulico', style:'subheader',fillColor:'#fff'},
					    {text:'Aéreo', style:'subheader',fillColor:'#fff'},
					    {text:'Eventual', fillColor:'#67ffa1',style:'subheader', fillColor:'#fff'},
					    {text:'2 - Tolerável', style:'subheader', fillColor:'#fff'},
					    {text:'4 - Provável', style:'subheader', fillColor:'#fff'},
					    {text:'8 - Médio', style:'subheader', fillColor:'#fff'},
				    ],
				],
			},
			layout: 'headerLineOnly',
			
		},
		{
            width: '100%',
            style: 'tableExample',
            margin:[0,10,0,0],
                table: {
                    widths:'100%',
    			    headerRows: 1,
    				body: [
    				    [{text: 'AÇÕES E ESTRATÉGIAS', style: 'tableHeader', fillColor:'#fff',color:'black', colSpan:1, bold:true, alignment: 'left',margin:[0,0,0,0]}],
    			        [{text: 'Nenhum controle adicional é necessário. A avaliação quantitativa poderá ser realizada apenas para confrmação do baixo nível e/ou concentração do agente; Manter o acompanhamento da execução das atividades e caso existam medidas de melhoria, incluir.', alignment: 'justify'}],
    			    ]
    		    },
		    layout: 'headerLineOnly'
    	},
		
		{
			style: 'tableExample',
			layout: 'headerLineOnly',
			margin:[0,10,0,0],
			table: {
			    headerRows: 1,
			    widths: [59, 103, 131, 100, 70, 175, '*'],	
				body: [
				    [{text: 'MEDIÇÕES QUANTITATIVAS', style:'tableHeader',fillColor:'#fff',color:'black', bold:true, colSpan: 7, alignment: 'left'},{},{},{},{},{},{}],
					[
					    {text:'Data', style:'subheader', alignment:'left'},
					    {text:'Tempo de exposição', style:'tableHeader', alignment:'left'},
					    {text:'Intensidade/Concentração', style:'tableHeader', alignment:'left'},
					    {text:'Limite de tolerância', style:'tableHeader', alignment:'left'},
					    {text:'Nível de ação', style:'tableHeader', alignment:'left'},
					    {text:'Und. de Medida da Intens/Concent', style:'tableHeader', alignment:'left'},
					    {text:'Técnica utilizada', style:'tableHeader', alignment:'left'}
					],
					[
					    {text:'12/02/2021', alignment:'left',style:'subheader'},
					    {text:'10 anos', alignment:'left',style:'subheader'},
					    {text:'Diária', alignment:'left',style:'subheader'},
					    {text:'Sem limite', alignment:'left',style:'subheader'},
					    {text:'Alto', alignment:'left',style:'subheader'},
					    {text:'Peridiocidade', alignment:'left',style:'subheader'},
					    {text:'Estatistica', alignment:'left',style:'subheader'}
					],
				]
			},
			
			
		},
		
		{
            columns:[
    		    {
    		        width: '100%',
			        style: 'tableExample',
			        margin:[0,10,0,0],
			        table: {
				    widths: [20,'*',170,'*',100,'*'],
				    headerRows: 1,
				    body: [
					    [{text: 'MEDIDAS DE CONTROLE E PROTEÇÃO', style: 'tableHeader',fillColor:'#fff',color:'black', bold:true, colSpan: 6, alignment: 'left',margin:[0,0,0,0]}, {},{},{},{},{}],
					    [
					        {text: 'EPI',style:'tableHeader', bold:true}, 
					        {text: 'Texto texto texto',style:'subheader', bold:false},
					        {text: 'Medidas de prevenção',style:'tableHeader', bold:true},
					        {text: 'Texto texto texto',style:'subheader', bold:false},
					        {text: 'Fundamentação legal',style:'tableHeader', bold:true},
					        {text: 'Texto texto texto',style:'subheader', bold:false},
					    ],
					    [
					        {text: 'EPC',style:'tableHeader', bold:true, margin:[0,40,0,0]}, 
					        {text: 'Texto texto texto',style:'subheader', bold:false, margin:[0,40,0,0]},
					        {text: 'Possíveis lesões ou agrávos à saúde',style:'tableHeader', bold:true, margin:[0,40,0,0]},
					        {text: 'Texto texto texto',style:'subheader', bold:false, margin:[0,40,0,0]},
					        {text: 'Observações',style:'tableHeader', bold:true,margin:[0,40,0,0]},
					        {text: 'Texto texto texto',style:'subheader', bold:false,margin:[0,40,0,0]},
					    ],
					    
				    ],
			    },
			 layout: 'headerLineOnly'
		},
    		
        		
            ], 
            columnGap: 10
        },	
	
	
	
	
	
	
	
	
	
	
	
	
	
	{
			style: 'tableExample',
			margin:[0,10,0,0],
			table: {
			    headerRows: 1,
			    widths: [85, 80, '*', 65, 65, 65, 65, 65],
				body: [
				    
				    [
				        {text: 'GRUPO: FÍSICO', style: 'subheader', fillColor:'#67ffa1',bold:true, alignement:'left', colSpan: 8},{},{},{},{},{},{},{},
				    ],
					    
					[   
					    [{text: 'Perigo', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Dano/Risco', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Fonte/Circustância', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Propagação', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Frequência', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Severidade', style:'tableHeader', alignment: 'left'}],
					    [{text: 'Probalidade', style:'tableHeader', alignment: 'left'}],
					    [{text: 'Nível de risco', style:'tableHeader', alignment: 'left'}],
					],
					[
					    {text:'Elvador Danificado', style:'subheader', fillColor:'#fff'},
					    {text:'Ruído(01.01.017)', style:'subheader', fillColor:'#fff'},
					    {text:'Elevação de veículos em elevador hidráulico', style:'subheader',fillColor:'#fff'},
					    {text:'Aéreo', style:'subheader',fillColor:'#fff'},
					    {text:'Eventual', fillColor:'#67ffa1',style:'subheader', fillColor:'#fff'},
					    {text:'2 - Tolerável', style:'subheader', fillColor:'#fff'},
					    {text:'4 - Provável', style:'subheader', fillColor:'#fff'},
					    {text:'8 - Médio', style:'subheader', fillColor:'#fff'},
				    ],
				],
			},
			layout: 'headerLineOnly',
			
		},
		{
            width: '100%',
            style: 'tableExample',
            margin:[0,10,0,0],
                table: {
                    widths:'100%',
    			    headerRows: 1,
    				body: [
    				    [{text: 'AÇÕES E ESTRATÉGIAS', style: 'tableHeader', fillColor:'#fff',color:'black', colSpan:1, bold:true, alignment: 'left',margin:[0,0,0,0]}],
    			        [{text: 'Nenhum controle adicional é necessário. A avaliação quantitativa poderá ser realizada apenas para confrmação do baixo nível e/ou concentração do agente; Manter o acompanhamento da execução das atividades e caso existam medidas de melhoria, incluir.', alignment: 'justify'}],
    			    ]
    		    },
		    layout: 'headerLineOnly'
    	},
		
		{
			style: 'tableExample',
			layout: 'headerLineOnly',
			margin:[0,10,0,0],
			table: {
			    headerRows: 1,
			    widths: [59, 103, 131, 100, 70, 175, '*'],	
				body: [
				    [{text: 'MEDIÇÕES QUANTITATIVAS', style:'tableHeader',fillColor:'#fff',color:'black', bold:true, colSpan: 7, alignment: 'left'},{},{},{},{},{},{}],
					[
					    {text:'Data', style:'subheader', alignment:'left'},
					    {text:'Tempo de exposição', style:'tableHeader', alignment:'left'},
					    {text:'Intensidade/Concentração', style:'tableHeader', alignment:'left'},
					    {text:'Limite de tolerância', style:'tableHeader', alignment:'left'},
					    {text:'Nível de ação', style:'tableHeader', alignment:'left'},
					    {text:'Und. de Medida da Intens/Concent', style:'tableHeader', alignment:'left'},
					    {text:'Técnica utilizada', style:'tableHeader', alignment:'left'}
					],
					[
					    {text:'12/02/2021', alignment:'left',style:'subheader'},
					    {text:'10 anos', alignment:'left',style:'subheader'},
					    {text:'Diária', alignment:'left',style:'subheader'},
					    {text:'Sem limite', alignment:'left',style:'subheader'},
					    {text:'Alto', alignment:'left',style:'subheader'},
					    {text:'Peridiocidade', alignment:'left',style:'subheader'},
					    {text:'Estatistica', alignment:'left',style:'subheader'}
					],
				]
			},
			
			
		},
		
		{
            columns:[
    		    {
    		        width: '100%',
			        style: 'tableExample',
			        margin:[0,10,0,0],
			        table: {
				    widths: [20,'*',170,'*',100,'*'],
				    headerRows: 1,
				    body: [
					    [{text: 'MEDIDAS DE CONTROLE E PROTEÇÃO', style: 'tableHeader',fillColor:'#fff',color:'black', bold:true, colSpan: 6, alignment: 'left',margin:[0,0,0,0]}, {},{},{},{},{}],
					    [
					        {text: 'EPI',style:'tableHeader', bold:true}, 
					        {text: 'Texto texto texto',style:'subheader', bold:false},
					        {text: 'Medidas de prevenção',style:'tableHeader', bold:true},
					        {text: 'Texto texto texto',style:'subheader', bold:false},
					        {text: 'Fundamentação legal',style:'tableHeader', bold:true},
					        {text: 'Texto texto texto',style:'subheader', bold:false},
					    ],
					    [
					        {text: 'EPC',style:'tableHeader', bold:true, margin:[0,40,0,0]}, 
					        {text: 'Texto texto texto',style:'subheader', bold:false, margin:[0,40,0,0]},
					        {text: 'Possíveis lesões ou agrávos à saúde',style:'tableHeader', bold:true, margin:[0,40,0,0]},
					        {text: 'Texto texto texto',style:'subheader', bold:false, margin:[0,40,0,0]},
					        {text: 'Observações',style:'tableHeader', bold:true,margin:[0,40,0,0]},
					        {text: 'Texto texto texto',style:'subheader', bold:false,margin:[0,40,0,0]},
					    ],
					    
				    ],
			    },
			 layout: 'headerLineOnly'
		},
    		
        		
            ], 
            columnGap: 10
        },	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	{
			style: 'tableExample',
			margin:[0,10,0,0],
			table: {
			    headerRows: 1,
			    widths: [85, 80, '*', 65, 65, 65, 65, 65],
				body: [
				    
				    [
				        {text: 'GRUPO: FÍSICO', style: 'subheader', fillColor:'#67ffa1',bold:true, alignement:'left', colSpan: 8},{},{},{},{},{},{},{},
				    ],
					    
					[   
					    [{text: 'Perigo', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Dano/Risco', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Fonte/Circustância', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Propagação', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Frequência', style: 'tableHeader', alignement:'left'}],
					    [{text: 'Severidade', style:'tableHeader', alignment: 'left'}],
					    [{text: 'Probalidade', style:'tableHeader', alignment: 'left'}],
					    [{text: 'Nível de risco', style:'tableHeader', alignment: 'left'}],
					],
					[
					    {text:'Elvador Danificado', style:'subheader', fillColor:'#fff'},
					    {text:'Ruído(01.01.017)', style:'subheader', fillColor:'#fff'},
					    {text:'Elevação de veículos em elevador hidráulico', style:'subheader',fillColor:'#fff'},
					    {text:'Aéreo', style:'subheader',fillColor:'#fff'},
					    {text:'Eventual', fillColor:'#67ffa1',style:'subheader', fillColor:'#fff'},
					    {text:'2 - Tolerável', style:'subheader', fillColor:'#fff'},
					    {text:'4 - Provável', style:'subheader', fillColor:'#fff'},
					    {text:'8 - Médio', style:'subheader', fillColor:'#fff'},
				    ],
				],
			},
			layout: 'headerLineOnly',
			
		},
		{
            width: '100%',
            style: 'tableExample',
            margin:[0,10,0,0],
                table: {
                    widths:'100%',
    			    headerRows: 1,
    				body: [
    				    [{text: 'AÇÕES E ESTRATÉGIAS', style: 'tableHeader', fillColor:'#fff',color:'black', colSpan:1, bold:true, alignment: 'left',margin:[0,0,0,0]}],
    			        [{text: 'Nenhum controle adicional é necessário. A avaliação quantitativa poderá ser realizada apenas para confrmação do baixo nível e/ou concentração do agente; Manter o acompanhamento da execução das atividades e caso existam medidas de melhoria, incluir.', alignment: 'justify'}],
    			    ]
    		    },
		    layout: 'headerLineOnly'
    	},
		
		{
			style: 'tableExample',
			layout: 'headerLineOnly',
			margin:[0,10,0,0],
			table: {
			    headerRows: 1,
			    widths: [59, 103, 131, 100, 70, 175, '*'],	
				body: [
				    [{text: 'MEDIÇÕES QUANTITATIVAS', style:'tableHeader',fillColor:'#fff',color:'black', bold:true, colSpan: 7, alignment: 'left'},{},{},{},{},{},{}],
					[
					    {text:'Data', style:'subheader', alignment:'left'},
					    {text:'Tempo de exposição', style:'tableHeader', alignment:'left'},
					    {text:'Intensidade/Concentração', style:'tableHeader', alignment:'left'},
					    {text:'Limite de tolerância', style:'tableHeader', alignment:'left'},
					    {text:'Nível de ação', style:'tableHeader', alignment:'left'},
					    {text:'Und. de Medida da Intens/Concent', style:'tableHeader', alignment:'left'},
					    {text:'Técnica utilizada', style:'tableHeader', alignment:'left'}
					],
					[
					    {text:'12/02/2021', alignment:'left',style:'subheader'},
					    {text:'10 anos', alignment:'left',style:'subheader'},
					    {text:'Diária', alignment:'left',style:'subheader'},
					    {text:'Sem limite', alignment:'left',style:'subheader'},
					    {text:'Alto', alignment:'left',style:'subheader'},
					    {text:'Peridiocidade', alignment:'left',style:'subheader'},
					    {text:'Estatistica', alignment:'left',style:'subheader'}
					],
				]
			},
			
			
		},
		
		{
            columns:[
    		    {
    		        width: '100%',
			        style: 'tableExample',
			        margin:[0,10,0,0],
			        table: {
				    widths: [20,'*',170,'*',100,'*'],
				    headerRows: 1,
				    body: [
					    [{text: 'MEDIDAS DE CONTROLE E PROTEÇÃO', style: 'tableHeader',fillColor:'#fff',color:'black', bold:true, colSpan: 6, alignment: 'left',margin:[0,0,0,0]}, {},{},{},{},{}],
					    [
					        {text: 'EPI',style:'tableHeader', bold:true}, 
					        {text: 'Texto texto texto',style:'subheader', bold:false},
					        {text: 'Medidas de prevenção',style:'tableHeader', bold:true},
					        {text: 'Texto texto texto',style:'subheader', bold:false},
					        {text: 'Fundamentação legal',style:'tableHeader', bold:true},
					        {text: 'Texto texto texto',style:'subheader', bold:false},
					    ],
					    [
					        {text: 'EPC',style:'tableHeader', bold:true, margin:[0,40,0,0]}, 
					        {text: 'Texto texto texto',style:'subheader', bold:false, margin:[0,40,0,0]},
					        {text: 'Possíveis lesões ou agrávos à saúde',style:'tableHeader', bold:true, margin:[0,40,0,0]},
					        {text: 'Texto texto texto',style:'subheader', bold:false, margin:[0,40,0,0]},
					        {text: 'Observações',style:'tableHeader', bold:true,margin:[0,40,0,0]},
					        {text: 'Texto texto texto',style:'subheader', bold:false,margin:[0,40,0,0]},
					    ],
					    
				    ],
			    },
			 layout: 'headerLineOnly'
		},
    		
        		
            ], 
            columnGap: 10
        },	
	],
	
	footer: 
	{
	    margin: [10,3,10,0],
	    fontSize: 9,
        columns: [
            {
                text: 'Relatório de Inventário de Riscos', 
                alignment: 'left',
            },
            {
                text: 'Gerado por Grosafety Desenvolvimento de Software', 
                alignment: 'center',
            },
            {
                text: '17/03/2021 15:13:26', 
                alignment: 'right',
            }
        ]
    },
	
	styles: {
	    
		header: {
			
		},
		
		subheader: {
		    fontSize: 10,
		    bold:false,
		    
			
		},
		
		tableExample: {
		    fontSize: 11,
		   
		},
		
		tableHeader: {
		    fontSize: 10,
		    bold: true,
		   
		},

	},
	
	defaultStyle: {
	
	},
	
}