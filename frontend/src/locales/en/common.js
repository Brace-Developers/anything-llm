const TRANSLATIONS = {
  common: {
    "workspaces-name": "Nombre del Espacio de Trabajo",
    error: "error",
    success: "éxito",
    user: "Usuario",
    selection: "Selección de Modelo",
    saving: "Guardando...",
    save: "Guardar cambios",
    previous: "Página Anterior",
    next: "Página Siguiente",
  },

  // Elementos del menú de la barra lateral de configuración.
  settings: {
    title: "Configuración de la Instancia",
    system: "Configuración General",
    invites: "Invitaciones",
    users: "Usuarios",
    workspaces: "Espacios de Trabajo",
    "workspace-chats": "Chats de Espacio de Trabajo",
    customization: "Personalización",
    "api-keys": "API de Desarrollador",
    llm: "LLM",
    transcription: "Transcripción",
    embedder: "Incrustador",
    "text-splitting": "Divisor de Texto y Fragmentación",
    "voice-speech": "Voz y Habla",
    "vector-database": "Base de Datos Vectorial",
    embeds: "Incrustación de Chat",
    "embed-chats": "Historial de Incrustación de Chat",
    security: "Seguridad",
    "event-logs": "Registros de Eventos",
    privacy: "Privacidad y Datos",
    "ai-providers": "Proveedores de IA",
    "agent-skills": "Habilidades del Agente",
    admin: "Administrador",
    tools: "Herramientas",
    "experimental-features": "Características Experimentales",
    contact: "Contactar Soporte",
    "browser-extension": "Extensión del Navegador",
  },

  // Definiciones de Páginas
  login: {
    "multi-user": {
      welcome: "Bienvenido a",
      "placeholder-username": "Nombre de Usuario",
      "placeholder-password": "Contraseña",
      login: "Iniciar Sesión",
      validating: "Validando...",
      "forgot-pass": "Olvidé mi contraseña",
      reset: "Restablecer",
    },
    "sign-in": {
      start: "Inicia sesión en tu",
      end: "cuenta.",
    },
    "password-reset": {
      title: "Restablecimiento de Contraseña",
      description:
        "Proporciona la información necesaria a continuación para restablecer tu contraseña.",
      "recovery-codes": "Códigos de Recuperación",
      "recovery-code": "Código de Recuperación {{index}}",
      "back-to-login": "Volver al Inicio de Sesión",
    },
  },

  welcomeMessage: {
    part1:
      "Bienvenido a AnythingLLM, AnythingLLM es una herramienta de IA de código abierto de Mintplex Labs que convierte cualquier cosa en un chatbot entrenado con el que puedes consultar y chatear. AnythingLLM es un software BYOK (trae tus propias claves) por lo que no hay suscripción, tarifa o cargos por este software fuera de los servicios que quieras usar con él.",
    part2:
      "AnythingLLM es la forma más fácil de juntar poderosos productos de IA como OpenAI, GPT-4, LangChain, PineconeDB, ChromaDB y otros servicios en un paquete ordenado sin complicaciones para aumentar tu productividad en un 100x.",
    part3:
      "AnythingLLM puede funcionar totalmente de forma local en tu máquina con tan poco overhead que ni siquiera notarás que está ahí. No se necesita GPU. La instalación en la nube y en las instalaciones también está disponible.\nEl ecosistema de herramientas de IA se vuelve más poderoso cada día. AnythingLLM lo hace fácil de usar.",
    githubIssue: "Crear un problema en Github",
    user1: "¿Cómo empiezo?",
    part4:
      "Es simple. Todas las colecciones están organizadas en cubos que llamamos \"Espacios de trabajo\". Los espacios de trabajo son cubos de archivos, documentos, imágenes, PDFs y otros archivos que se transformarán en algo que los LLM pueden entender y usar en la conversación.\n\nPuedes añadir y eliminar archivos en cualquier momento.",
    createWorkspace: "Crea tu primer espacio de trabajo",
    user2:
      "¿Es esto como un Dropbox de IA o algo así? ¿Qué hay del chat? ¿Es un chatbot, no?",
    part5:
      "AnythingLLM es más que un Dropbox más inteligente.\n\nAnythingLLM ofrece dos formas de hablar con tus datos:\n\n<i>Consulta:</i> Tus chats devolverán datos o inferencias encontradas con los documentos en tu espacio de trabajo a los que tiene acceso. ¡Añadir más documentos al Espacio de trabajo lo hace más inteligente! \n\n<i>Conversacional:</i> Tus documentos + tu historial de chat en curso contribuyen al conocimiento del LLM al mismo tiempo. Genial para añadir información basada en texto en tiempo real o correcciones y malentendidos que el LLM pueda tener. \n\nPuedes alternar entre cualquier modo \n<i>¡en medio de la conversación!</i>",
    user3: "Wow, esto suena increíble, ¡déjame probarlo ya!",
    part6: "¡Diviértete!",
    starOnGithub: "Dale una estrella en GitHub",
    contact: "Contacta con Mintplex Labs",
  },

  "new-workspace": {
    title: "New Workspace",
    placeholder: "My Workspace",
  },

  // Elementos del menú de Configuración del Espacio de Trabajo
  "workspaces—settings": {
    general: "Configuración General",
    chat: "Configuración de Chat",
    vector: "Base de Datos de Vectores",
    members: "Miembros",
    agent: "Configuración del Agente",
  },

  // Apariencia General
  general: {
    vector: {
      title: "Cantidad de Vectores",
      description: "Número total de vectores en tu base de datos de vectores.",
    },
    names: {
      description:
        "Esto solo cambiará el nombre de visualización de tu espacio de trabajo.",
    },
    message: {
      title: "Mensajes de Chat Sugeridos",
      description:
        "Personaliza los mensajes que se sugerirán a los usuarios de tu espacio de trabajo.",
      add: "Añadir nuevo mensaje",
      save: "Guardar Mensajes",
      heading: "Explícame",
      body: "los beneficios de AnythingLLM",
    },
    pfp: {
      title: "Imagen de Perfil del Asistente",
      description:
        "Personaliza la imagen de perfil del asistente para este espacio de trabajo.",
      image: "Imagen del Espacio de Trabajo",
      remove: "Eliminar Imagen del Espacio de Trabajo",
    },
    delete: {
      title: "Eliminar Espacio de Trabajo",
      description:
        "Elimina este espacio de trabajo y todos sus datos. Esto eliminará el espacio de trabajo para todos los usuarios.",
      delete: "Eliminar Espacio de Trabajo",
      deleting: "Eliminando Espacio de Trabajo...",
      "confirm-start": "Estás a punto de eliminar tu",
      "confirm-end":
        "espacio de trabajo completo. Esto eliminará todas las incrustaciones de vectores en tu base de datos de vectores.\n\nLos archivos fuente originales permanecerán intactos. Esta acción es irreversible.",
    },
  },

  // Configuración del Chat
  chat: {
    llm: {
      title: "Proveedor de LLM del Espacio de Trabajo",
      description:
        "El proveedor y modelo LLM específico que se utilizará para este espacio de trabajo. Por defecto, usa el proveedor y la configuración del sistema LLM.",
      search: "Buscar todos los proveedores de LLM",
    },
    model: {
      title: "Modelo de Chat del Espacio de Trabajo",
      description:
        "El modelo de chat específico que se utilizará para este espacio de trabajo. Si está vacío, usará la preferencia del sistema LLM.",
      wait: "-- esperando modelos --",
    },
    mode: {
      title: "Modo de Chat",
      chat: {
        title: "Chat",
        "desc-start":
          "proporcionará respuestas con el conocimiento general del LLM",
        and: "y",
        "desc-end": "el contexto del documento encontrado.",
      },
      query: {
        title: "Consulta",
        "desc-start": "proporcionará respuestas",
        only: "solo",
        "desc-end": "si se encuentra contexto en el documento.",
      },
    },
    history: {
      title: "Historial de Chat",
      "desc-start":
        "La cantidad de chats anteriores que se incluirán en la memoria a corto plazo de la respuesta.",
      recommend: "Recomendado 20.",
      "desc-end":
        "Cualquier cantidad mayor a 45 es probable que lleve a fallas continuas del chat dependiendo del tamaño del mensaje.",
    },
    prompt: {
      title: "Prompt",
      description:
        "El prompt que se utilizará en este espacio de trabajo. Define el contexto y las instrucciones para que la IA genere una respuesta. Debes proporcionar un prompt cuidadosamente elaborado para que la IA pueda generar una respuesta relevante y precisa.",
    },
    refusal: {
      title: "Respuesta de rechazo en modo consulta",
      "desc-start": "Cuando esté en modo",
      query: "consulta",
      "desc-end":
        "puedes querer devolver una respuesta de rechazo personalizada cuando no se encuentre contexto.",
    },
    temperature: {
      title: "Temperatura del LLM",
      "desc-start":
        'Esta configuración controla cuán "creativas" serán las respuestas de tu LLM.',
      "desc-end":
        "Cuanto mayor sea el número, más creativo será. Para algunos modelos, esto puede llevar a respuestas incoherentes cuando se establece demasiado alto.",
      hint: "La mayoría de los LLMs tienen varios rangos aceptables de valores válidos. Consulta con tu proveedor de LLM para obtener esa información.",
    },
  },

  // Base de Datos de Vectores
  "vector-workspace": {
    identifier: "Identificador de base de datos de vectores",
    snippets: {
      title: "Máximo de Fragmentos de Contexto",
      description:
        "Esta configuración controla la cantidad máxima de fragmentos de contexto que se enviarán al LLM por cada chat o consulta.",
      recommend: "Recomendado: 4",
    },
    doc: {
      title: "Umbral de similitud de documentos",
      description:
        "La puntuación mínima de similitud requerida para que una fuente se considere relacionada con el chat. Cuanto mayor sea el número, más similar debe ser la fuente al chat.",
      zero: "Sin restricción",
      low: "Bajo (puntuación de similitud ≥ .25)",
      medium: "Medio (puntuación de similitud ≥ .50)",
      high: "Alto (puntuación de similitud ≥ .75)",
    },
    reset: {
      reset: "Restablecer base de datos de vectores",
      resetting: "Limpiando vectores...",
      confirm:
        "Estás a punto de restablecer la base de datos de vectores de este espacio de trabajo. Esto eliminará todas las incrustaciones de vectores actualmente incrustados.\n\nLos archivos fuente originales permanecerán intactos. Esta acción es irreversible.",
      error:
        "¡No se pudo restablecer la base de datos de vectores del espacio de trabajo!",
      success:
        "¡La base de datos de vectores del espacio de trabajo fue restablecida!",
    },
  },

  // Configuración del Agente
  agent: {
    "performance-warning":
      "El rendimiento de los LLMs que no admiten explícitamente la llamada a herramientas depende en gran medida de las capacidades y la precisión del modelo. Algunas habilidades pueden ser limitadas o no funcionales.",
    provider: {
      title: "Proveedor de LLM del Agente del Espacio de Trabajo",
      description:
        "El proveedor y modelo LLM específico que se utilizará para el agente @agent de este espacio de trabajo.",
    },
    mode: {
      chat: {
        title: "Modelo de Chat del Agente del Espacio de Trabajo",
        description:
          "El modelo de chat específico que se utilizará para el agente @agent de este espacio de trabajo.",
      },
      title: "Modelo del Agente del Espacio de Trabajo",
      description:
        "El modelo LLM específico que se utilizará para el agente @agent de este espacio de trabajo.",
      wait: "-- esperando modelos --",
    },

    skill: {
      title: "Habilidades predeterminadas del agente",
      description:
        "Mejora las habilidades naturales del agente predeterminado con estas habilidades preconstruidas. Esta configuración se aplica a todos los espacios de trabajo.",
      rag: {
        title: "RAG y memoria a largo plazo",
        description:
          'Permite que el agente aproveche tus documentos locales para responder una consulta o pedirle al agente que "recuerde" piezas de contenido para la recuperación de memoria a largo plazo.',
      },
      view: {
        title: "Ver y resumir documentos",
        description:
          "Permite que el agente liste y resuma el contenido de los archivos del espacio de trabajo que están incrustados actualmente.",
      },
      scrape: {
        title: "Raspar sitios web",
        description:
          "Permite que el agente visite y raspe el contenido de sitios web.",
      },
      generate: {
        title: "Generar gráficos",
        description:
          "Habilita al agente predeterminado para generar varios tipos de gráficos a partir de datos proporcionados o dados en el chat.",
      },
      save: {
        title: "Generar y guardar archivos en el navegador",
        description:
          "Habilita al agente predeterminado para generar y escribir en archivos que se guardan y pueden ser descargados en tu navegador.",
      },
      web: {
        title: "Búsqueda y navegación web en vivo",
        "desc-start":
          "Habilita a tu agente para buscar en la web y responder a tus preguntas conectándose a un proveedor de búsqueda web (SERP).",
        "desc-end":
          "La búsqueda web durante las sesiones del agente no funcionará hasta que esto esté configurado.",
      },
    },
  },

  // Chats del Espacio de Trabajo
  recorded: {
    title: "Chats del Espacio de Trabajo",
    description:
      "Estos son todos los chats y mensajes registrados que han sido enviados por usuarios ordenados por su fecha de creación.",
    export: "Exportar",
    table: {
      id: "Id",
      by: "Enviado por",
      workspace: "Espacio de Trabajo",
      prompt: "Prompt",
      response: "Respuesta",
      at: "Enviado a",
    },
  },

  // Apariencia
  appearance: {
    title: "Apariencia",
    description: "Personaliza la configuración de apariencia de tu plataforma.",
    logo: {
      title: "Personalizar Logotipo",
      description: "Sube tu logotipo personalizado para hacer tu chatbot tuyo.",
      add: "Añadir un logotipo personalizado",
      recommended: "Tamaño recomendado: 800 x 200",
      remove: "Eliminar",
      replace: "Reemplazar",
    },
    message: {
      title: "Personalizar Mensajes",
      description:
        "Personaliza los mensajes automáticos mostrados a tus usuarios.",
      new: "Nuevo",
      system: "sistema",
      user: "usuario",
      message: "mensaje",
      assistant: "Asistente de Chat AnythingLLM",
      "double-click": "Doble clic para editar...",
      save: "Guardar Mensajes",
    },
    icons: {
      title: "Iconos de Pie de Página Personalizados",
      description:
        "Personaliza los iconos de pie de página mostrados en la parte inferior de la barra lateral.",
      icon: "Icono",
      link: "Enlace",
    },
  },

  // Claves API
  api: {
    title: "Claves API",
    description:
      "Las claves API permiten al titular acceder y gestionar esta instancia de AnythingLLM de manera programática.",
    link: "Leer la documentación de la API",
    generate: "Generar Nueva Clave API",
    table: {
      key: "Clave API",
      by: "Creado por",
      created: "Creado",
    },
  },

  llm: {
    title: "Preferencia de LLM",
    description:
      "Estas son las credenciales y configuraciones para tu proveedor preferido de chat y embedding de LLM. Es importante que estas claves estén actualizadas y correctas para que AnythingLLM funcione correctamente.",
    provider: "Proveedor de LLM",
  },

  transcription: {
    title: "Preferencia del Modelo de Transcripción",
    description:
      "Estas son las credenciales y configuraciones para tu proveedor preferido de modelo de transcripción. Es importante que estas claves estén actualizadas y correctas o de lo contrario los archivos multimedia y de audio no se transcribirán.",
    provider: "Proveedor de Transcripción",
    "warn-start":
      "Usar el modelo local de whisper en máquinas con poca RAM o CPU puede hacer que AnythingLLM se detenga al procesar archivos multimedia.",
    "warn-recommend":
      "Recomendamos al menos 2GB de RAM y subir archivos <10Mb.",
    "warn-end":
      "El modelo incorporado se descargará automáticamente en el primer uso.",
  },

  embedding: {
    title: "Preferencia de Embedding",
    "desc-start":
      "Cuando uses un LLM que no soporta de forma nativa un motor de embedding, es posible que necesites especificar credenciales adicionales para hacer embedding de texto.",
    "desc-end":
      "Embedding es el proceso de convertir texto en vectores. Estas credenciales son necesarias para convertir tus archivos y prompts en un formato que AnythingLLM pueda usar para procesar.",
    provider: {
      title: "Proveedor de Embedding",
      description:
        "No se requiere configuración cuando se usa el motor de embedding nativo de AnythingLLM.",
    },
  },

  text: {
    title: "Preferencias de División y Fragmentación de Texto",
    "desc-start":
      "A veces, es posible que desees cambiar la forma predeterminada en que los nuevos documentos se dividen y fragmentan antes de insertarlos en tu base de datos de vectores.",
    "desc-end":
      "Solo debes modificar esta configuración si entiendes cómo funciona la división de texto y sus efectos secundarios.",
    "warn-start": "Los cambios aquí solo se aplicarán a",
    "warn-center": "nuevos documentos incrustados",
    "warn-end": ", no a documentos existentes.",
    size: {
      title: "Tamaño de Fragmento de Texto",
      description:
        "Esta es la longitud máxima de caracteres que pueden estar presentes en un solo vector.",
      recommend: "La longitud máxima del modelo de embedding es",
    },

    overlap: {
      title: "Superposición de Fragmentos de Texto",
      description:
        "Esta es la superposición máxima de caracteres que ocurre durante la fragmentación entre dos fragmentos de texto adyacentes.",
    },
  },

  // Base de Datos de Vectores
  vector: {
    title: "Base de Datos de Vectores",
    description:
      "Estas son las credenciales y configuraciones para el funcionamiento de tu instancia de AnythingLLM. Es importante que estas claves estén actualizadas y correctas.",
    provider: {
      title: "Proveedor de Base de Datos de Vectores",
      description: "No se necesita configuración para LanceDB.",
    },
  },

  // Widgets de Chat Insertables
  embeddable: {
    title: "Widgets de Chat Insertables",
    description:
      "Los widgets de chat insertables son interfaces de chat públicas que están vinculadas a un solo espacio de trabajo. Estos te permiten construir espacios de trabajo que luego puedes publicar al mundo.",
    create: "Crear inserción",
    table: {
      workspace: "Espacio de Trabajo",
      chats: "Chats Enviados",
      Active: "Dominios Activos",
    },
  },

  "embed-chats": {
    title: "Chats embebidos",
    export: "Exportar",
    description:
      "Estos son todos los chats y mensajes registrados de cualquier inserción que hayas publicado.",
    table: {
      embed: "Inserción",
      sender: "Remitente",
      message: "Mensaje",
      response: "Respuesta",
      at: "Enviado a",
    },
  },

  multi: {
    title: "Modo Multiusuario",
    description:
      "Configura tu instancia para admitir a tu equipo activando el Modo Multiusuario.",
    enable: {
      "is-enable": "El Modo Multiusuario está Habilitado",
      enable: "Habilitar Modo Multiusuario",
      description:
        "Por defecto, solo serás el único administrador. Como administrador, necesitarás crear cuentas para todos los nuevos usuarios o administradores. No pierdas tu contraseña, ya que solo un usuario administrador puede restablecer las contraseñas.",
      username: "Nombre de usuario de la cuenta de administrador",
      password: "Contraseña de la cuenta de administrador",
    },
    password: {
      title: "Protección con Contraseña",
      description:
        "Protege tu instancia de AnythingLLM con una contraseña. Si olvidas esto, no hay método de recuperación, así que asegúrate de guardar esta contraseña.",
    },
    instance: {
      title: "Proteger Instancia con Contraseña",
      description:
        "Por defecto, solo serás el único administrador. Como administrador, necesitarás crear cuentas para todos los nuevos usuarios o administradores. No pierdas tu contraseña, ya que solo un usuario administrador puede restablecer las contraseñas.",
      password: "Contraseña de la instancia",
    },
  },

  // Registros de Eventos
  event: {
    title: "Registros de Eventos",
    description:
      "Ver todas las acciones y eventos que ocurren en esta instancia para su monitoreo.",
    clear: "Borrar Registros de Eventos",
    table: {
      type: "Tipo de Evento",
      user: "Usuario",
      occurred: "Ocurrido a",
    },
  },

  // Privacidad y Manejo de Datos
  privacy: {
    title: "Privacidad y Manejo de Datos",
    description:
      "Esta es tu configuración para cómo los proveedores de terceros conectados y AnythingLLM manejan tus datos.",
    llm: "Selección de LLM",
    embedding: "Preferencia de Embedding",
    vector: "Base de Datos de Vectores",
    anonymous: "Telemetría Anónima Habilitada",
  },
};

export default TRANSLATIONS;
