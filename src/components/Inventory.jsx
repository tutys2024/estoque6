import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Package, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  MoreVertical
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Inventory = ({ searchQuery }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Toalhas de Banho Premium',
      category: 'Toalhas',
      quantity: 150,
      minStock: 50,
      price: 45.90,
      location: 'Sala A1',
      status: 'normal',
      lastUpdated: '2024-01-15',
      image: '/api/placeholder/60/60'
    },
    {
      id: 2,
      name: 'Lençóis Queen Size',
      category: 'Roupas de Cama',
      quantity: 25,
      minStock: 30,
      price: 89.90,
      location: 'Sala B2',
      status: 'low',
      lastUpdated: '2024-01-14',
      image: '/api/placeholder/60/60'
    },
    {
      id: 3,
      name: 'Sabonete Líquido',
      category: 'Produtos de Higiene',
      quantity: 0,
      minStock: 20,
      price: 12.50,
      location: 'Sala C1',
      status: 'out',
      lastUpdated: '2024-01-13',
      image: '/api/placeholder/60/60'
    },
    {
      id: 4,
      name: 'Shampoo Condicionador',
      category: 'Produtos de Higiene',
      quantity: 8,
      minStock: 15,
      price: 18.90,
      location: 'Sala C1',
      status: 'low',
      lastUpdated: '2024-01-12',
      image: '/api/placeholder/60/60'
    },
    {
      id: 5,
      name: 'Travesseiros Ortopédicos',
      category: 'Roupas de Cama',
      quantity: 80,
      minStock: 20,
      price: 65.00,
      location: 'Sala B1',
      status: 'normal',
      lastUpdated: '2024-01-11',
      image: '/api/placeholder/60/60'
    },
    {
      id: 6,
      name: 'Kit Amenities Luxo',
      category: 'Amenities',
      quantity: 200,
      minStock: 50,
      price: 25.90,
      location: 'Sala D1',
      status: 'normal',
      lastUpdated: '2024-01-10',
      image: '/api/placeholder/60/60'
    }
  ])

  const [filteredItems, setFilteredItems] = useState(items)
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [sortBy, setSortBy] = useState('name')

  const categories = ['all', 'Toalhas', 'Roupas de Cama', 'Produtos de Higiene', 'Amenities']
  const statuses = ['all', 'normal', 'low', 'out']

  useEffect(() => {
    let filtered = items

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by category
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(item => item.category === categoryFilter)
    }

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(item => item.status === statusFilter)
    }

    // Sort items
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'quantity':
          return b.quantity - a.quantity
        case 'price':
          return b.price - a.price
        case 'status':
          const statusOrder = { 'out': 0, 'low': 1, 'normal': 2 }
          return statusOrder[a.status] - statusOrder[b.status]
        default:
          return 0
      }
    })

    setFilteredItems(filtered)
  }, [searchQuery, categoryFilter, statusFilter, sortBy, items])

  const getStatusIcon = (status) => {
    switch (status) {
      case 'normal':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'low':
        return <AlertTriangle className="w-4 h-4 text-amber-500" />
      case 'out':
        return <AlertTriangle className="w-4 h-4 text-red-500" />
      default:
        return <Clock className="w-4 h-4 text-slate-400" />
    }
  }

  const getStatusBadge = (status, quantity, minStock) => {
    if (status === 'out') {
      return <Badge variant="destructive">Fora de Estoque</Badge>
    } else if (status === 'low') {
      return <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">Estoque Baixo</Badge>
    } else {
      return <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Normal</Badge>
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Controle de Estoque
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Gerencie todos os produtos do seu estoque
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filtrar por categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as Categorias</SelectItem>
                    {categories.slice(1).map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filtrar por status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os Status</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="low">Estoque Baixo</SelectItem>
                    <SelectItem value="out">Fora de Estoque</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Nome</SelectItem>
                    <SelectItem value="quantity">Quantidade</SelectItem>
                    <SelectItem value="price">Preço</SelectItem>
                    <SelectItem value="status">Status</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Items Grid */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-700">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12 rounded-lg">
                          <AvatarImage src={item.image} className="object-cover" />
                          <AvatarFallback className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                            {item.name.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white truncate">
                            {item.name}
                          </CardTitle>
                          <CardDescription className="text-sm text-slate-500 dark:text-slate-400">
                            {item.category} • {item.location}
                          </CardDescription>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            Visualizar
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="w-4 h-4 mr-2" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Excluir
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Status and Quantity */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(item.status)}
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Quantidade: {item.quantity}
                        </span>
                      </div>
                      {getStatusBadge(item.status, item.quantity, item.minStock)}
                    </div>

                    {/* Stock Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Estoque Mínimo: {item.minStock}</span>
                        <span className="text-slate-600 dark:text-slate-400">
                          {Math.round((item.quantity / (item.minStock * 2)) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${
                            item.status === 'out' ? 'bg-red-500' :
                            item.status === 'low' ? 'bg-amber-500' :
                            'bg-green-500'
                          }`}
                          style={{
                            width: `${Math.min(Math.max((item.quantity / (item.minStock * 2)) * 100, 0), 100)}%`
                          }}
                        />
                      </div>
                    </div>

                    {/* Price and Last Updated */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700">
                      <div className="text-lg font-bold text-slate-900 dark:text-white">
                        R$ {item.price.toFixed(2)}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Atualizado em {new Date(item.lastUpdated).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <Package className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
              Nenhum item encontrado
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Tente ajustar os filtros ou termos de busca
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default Inventory

