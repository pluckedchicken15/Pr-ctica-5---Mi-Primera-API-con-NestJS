import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service.js';

interface Clase {
  id: number;
  nombre: string;
  hora: string;
  instructor: string;
}

const clases: Clase[] = [
  {
    id: 1,
    nombre: 'yoga',
    hora: '3:00pm',
    instructor: 'Manuel Turizo',
  },
  {
    id: 2,
    nombre: 'spinning',
    hora: '6:00pm',
    instructor: 'Christian Nodal',
  },
];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // GET - Listar clases
  @Get('clases')
  listar(): Clase[] {
    return clases;
  }

  // POST - Crear clase
  @Post('clases')
  crear(
    @Body()
    cuerpo: {
      nombre: string;
      hora: string;
      instructor: string;
    },
  ): Clase {
    const nueva: Clase = {
      id: clases.length + 1,
      nombre: cuerpo.nombre,
      hora: cuerpo.hora,
      instructor: cuerpo.instructor,
    };

    clases.push(nueva);

    return nueva;
  }

  // DELETE - Eliminar clase
  @Delete('clases/:id')
  eliminar(@Param('id') id: string): Clase | string {
    const indice = clases.findIndex((c) => c.id === +id);

    if (indice === -1) {
      return 'Clase no encontrada';
    }

    const eliminada = clases.splice(indice, 1);

    return eliminada[0];
  }

  // PATCH - Editar clase
  @Patch('clases/:id')
  editar(
    @Param('id') id: string,
    @Body()
    cuerpo: {
      nombre?: string;
      hora?: string;
      instructor?: string;
    },
  ): Clase | string {
    const clase = clases.find((c) => c.id === +id);

    if (!clase) {
      return 'Clase no encontrada';
    }

    if (cuerpo.nombre !== undefined) {
      clase.nombre = cuerpo.nombre;
    }

    if (cuerpo.hora !== undefined) {
      clase.hora = cuerpo.hora;
    }

    if (cuerpo.instructor !== undefined) {
      clase.instructor = cuerpo.instructor;
    }

    return clase;
  }
}