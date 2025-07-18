import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Package, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  ArrowUp,
  ArrowDown,
  Clock,
  DollarSign
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Progress } from './ui/progress'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalItems: 1247,
    lowStock: 23,
    outOfStock: 8,
    totalValue: 125430.50
  })

  const [recentActivity] = useState([
    { id: 1, action: 'Adicionado', item: 'Toalhas de Banho Premium', quantity: 50, time: '2 min atrás', type: 'add' },
    { id: 2, action: 'Baixa', item: 'Sabonete Líquido', quantity: 15, time: '15 min atrás', type: 'remove' },
    { id: 3, action: 'Atualizado', item: 'Lençóis Queen Size', quantity: 30, time: '1h atrás', type: 'update' },
    { id: 4, action: 'Alerta', item: 'Shampoo Condicionador', quantity: 5, time: '2h atrás', type: 'alert' },
  ])

  const monthlyData = [
    { month: 'Jan', entrada: 400, saida: 240 },
    { month: 'Fev', entrada: 300, saida: 139 },
    { month: 'Mar', entrada: 200, saida: 980 },
    { month: 'Abr', entrada: 278, saida: 390 },
    { month: 'Mai', entrada: 189, saida: 480 },
    { month: 'Jun', entrada: 239, saida: 380 },
  ]

  const categoryData = [
    { name: 'Roupas de Cama', value: 35, color: '#3b82f6' },
    { name: 'Produtos de Higiene', value: 25, color: '#8b5cf6' },
    { name: 'Toalhas', value: 20, color: '#06b6d4' },
    { name: 'Amenities', value: 15, color: '#10b981' },
    { name: 'Outros', value: 5, color: '#f59e0b' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
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
          Dashboard
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Visão geral do sistema de controle de estoque
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Total de Itens
            </CardTitle>
            <Package className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
              {stats.totalItems.toLocaleString()}
            </div>
            <div className="flex items-center text-xs text-blue-600 dark:text-blue-400 mt-1">
              <ArrowUp className="w-3 h-3 mr-1" />
              +12% desde o mês passado
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border-amber-200 dark:border-amber-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-amber-700 dark:text-amber-300">
              Estoque Baixo
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-900 dark:text-amber-100">
              {stats.lowStock}
            </div>
            <div className="flex items-center text-xs text-amber-600 dark:text-amber-400 mt-1">
              <ArrowDown className="w-3 h-3 mr-1" />
              -3 desde ontem
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-red-700 dark:text-red-300">
              Fora de Estoque
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-900 dark:text-red-100">
              {stats.outOfStock}
            </div>
            <div className="flex items-center text-xs text-red-600 dark:text-red-400 mt-1">
              <Clock className="w-3 h-3 mr-1" />
              Requer atenção
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">
              Valor Total
            </CardTitle>
            <DollarSign className="h-4 w-4 text-green-600 dark:text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900 dark:text-green-100">
              R$ {stats.totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <div className="flex items-center text-xs text-green-600 dark:text-green-400 mt-1">
              <ArrowUp className="w-3 h-3 mr-1" />
              +8% este mês
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Movement Chart */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span>Movimentação Mensal</span>
              </CardTitle>
              <CardDescription>
                Entradas e saídas de produtos nos últimos 6 meses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="entrada" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="saida" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Category Distribution */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Package className="w-5 h-5 text-purple-600" />
                <span>Distribuição por Categoria</span>
              </CardTitle>
              <CardDescription>
                Percentual de itens por categoria de produto
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {categoryData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-slate-600" />
              <span>Atividade Recente</span>
            </CardTitle>
            <CardDescription>
              Últimas movimentações no sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: activity.id * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-800"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.type === 'add' ? 'bg-green-100 dark:bg-green-900/30' :
                      activity.type === 'remove' ? 'bg-blue-100 dark:bg-blue-900/30' :
                      activity.type === 'update' ? 'bg-purple-100 dark:bg-purple-900/30' :
                      'bg-amber-100 dark:bg-amber-900/30'
                    }`}>
                      {activity.type === 'add' && <ArrowUp className="w-5 h-5 text-green-600 dark:text-green-400" />}
                      {activity.type === 'remove' && <ArrowDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                      {activity.type === 'update' && <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />}
                      {activity.type === 'alert' && <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        {activity.action}: {activity.item}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Quantidade: {activity.quantity} • {activity.time}
                      </p>
                    </div>
                  </div>
                  <Badge variant={
                    activity.type === 'add' ? 'default' :
                    activity.type === 'remove' ? 'secondary' :
                    activity.type === 'update' ? 'outline' :
                    'destructive'
                  }>
                    {activity.action}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export default Dashboard

